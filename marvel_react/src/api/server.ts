let token =`1f1fbeccd5915ff7cf6c424f3a4ac692b677f640f691f033`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://reallycooldroneguys114.glitch.me/api/drones`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (response.ok) {
            throw new Error(`Failed to fetch data from server`)
        }

        return await response.json()
    },

    create: async(data:any) => {
        const response = await fetch(`https://reallycooldroneguys114.glitch.me/api/drones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
        return await response.json()
    },

    update: async(id:string, data:any={}) => {
        const response = await fetch(`https://reallycooldroneguys114.glitch.me/api/drones/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
        console.log(`successfully update marvel with id ${id}` )
    },

    delete: async(id:string) => {
        const response = await fetch(`https://reallycooldroneguys114.glitch.me/api/drones/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });

        if(!response.ok){
            throw new Error(`Failed to delete data`)
        }
    }
}