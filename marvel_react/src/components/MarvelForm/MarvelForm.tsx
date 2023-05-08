import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName, chooseDescription,
    chooseComicsAppearedIn,
    chooseSuperPower,
    chooseDateCreated,
    chooseUserToken,
    chooseCharacter } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface MarvelFormProps {
    id?: string;
    data?: {}
}

export const MarvelForm = (props:MarvelFormProps) => {
    const dispatch = useDispatch()
    let {marvelData, getData} = useGetData()
    const store = useStore()
    // const name = useSelector<MarvelState>(state => state.name)
    // console.log(name)
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if (props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset()
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseComicsAppearedIn(data.comics_appeared_in))
            dispatch(chooseSuperPower(data.super_power))
            dispatch(chooseDateCreated(data.date_created))
            dispatch(chooseUserToken(data.user_token))
            dispatch(chooseCharacter(data.character))
            console.log(store.getState())
            await serverCalls.create(store.getState())
            window.location.reload()
        };
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Marvel Name</label>
                <Input {...register('name')} name="name" placeholder='Name' />
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="Comics Appeared In"/>
                </div>
                <div>
                    <label htmlFor="super_power">Super Power</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Super Power"/>
                </div>
                <div>
                    <label htmlFor="date_created">Date Created</label>
                    <Input {...register('date_created')} name="date_created" placeholder="Date Created"/>
                </div>
                <div>
                    <label htmlFor="user_token">User Token</label>
                    <Input {...register('user_token')} name="user_token" placeholder="User Token"/>
                </div>
                <div>
                    <label htmlFor="character">Character</label>
                    <Input {...register('character')} name="character" placeholder="Character"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}



