const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    // insert data in the table
     await saveOrphanage(db, {
         lat: "-27.226633",
         lng: "-49.6335874",
         name:"Lar das meninas of God",
         about: " Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
         whatsapp: "123456789",
         images: [ 

             "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
             "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
             "https://images.unsplash.com/photo-1595009503377-e3be116106b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
             "https://images.unsplash.com/photo-1595009503377-e3be116106b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
             "https://images.unsplash.com/photo-1597553954309-30454e8502f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
             "https://images.unsplash.com/photo-1574647267419-cd3adf200aed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

     ].toString(),
     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
     opening_hours: "Horário de visitas das 18h até 8h",
     open_on_weekends: "0"
     })

    //consult data in table
      const selectedOrphanages = await db.all("SELECT * FROM orphanages")
      console.log(selectedOrphanages)

    // //consult only 1 orphanage by id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    // console.log(orphanage)

    // //delete data from table
    //console.log(await db.run("DELETE FROM orphanages"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))

    
})