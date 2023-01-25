export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  export const agencyColumns = [
    { field: "id_agence", headerName: "ID", width: 70 },
    {
      field: "photo",
      headerName: "User",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src="https://cdn-icons-png.flaticon.com/512/3595/3595835.png" alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "nom", headerName: "Nom d'agence", width: 200 },
    { field: "adresse", headerName: "Adresse", width: 200 },
    { field: "website", headerName: "Site Web", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    
  ];
  export const useColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar" />
           
          </div>
        );
      },
    },
    { field: "cin", headerName: "CIN", width: 100 },
    { field: "nom", headerName: "Nom", width: 100 },
    { field: "prenom", headerName: "Prenom", width: 100 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "tel", headerName: "Phone", width: 100 },
    { field: "adresse", headerName: "Adresse", width: 200 },
  ];
   ///velo
  export const veloColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src="https://cdn-icons-png.flaticon.com/512/3198/3198336.png" alt="avatar" />
          {params.row.username}
        </div>
      );
    },
    },
    { field: "id_agence", headerName: "ID Agence", width: 100 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "marque", headerName: "Marque", width: 100 },
    { field: "nom", headerName: "Nom", width: 150 },
    { field: "prix", headerName: "Prix", width: 100 },
    { field: "couleur", headerName: "Couleur", width: 100 },
    { field: "rate", headerName: "Rate", width: 100 },
    { field: "speed", headerName: "Vitesse", width: 100 },
    //{ field: "description", headerName: "Description", width: 200 },
    ];

    ///event
    export const eventColumns = [
      { field: "id", headerName: "ID", width: 70 },
      {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src="https://cdn-icons-png.flaticon.com/512/9353/9353711.png" alt="avatar" />
            {params.row.username}
          </div>
        );
      },
      },
      { field: "id_organization", headerName: "ID Club", width: 100 },
      { field: "id_piste", headerName: "ID Piste", width: 100 },
      { field: "date", headerName: "Date", width: 200 },
      { field: "heure", headerName: "Heure", width: 100 },
      { field: "adresse", headerName: "Adresse", width: 200 },
      //{ field: "description", headerName: "Description", width: 400 },
      ];


      ///club
      export const clubColumns = [
        { field: "id", headerName: "ID", width: 70 },
        {
          field: "photo",
          headerName: "Image",
          width: 100,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
                <img className="cellImg" src="https://cdn-icons-png.flaticon.com/512/4629/4629699.png" alt="avatar" />
                {params.row.username}
              </div>
            );
          },
          },
        { field: "nom", headerName: "Nom de Club", width: 150 },
        { field: "adresse", headerName: "Adresse", width: 200 },
        //{ field: "description", headerName: "Description", width: 300 },
        ];
      
      ///Piste
      export const pisteColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "nom", headerName: "Nom de la piste", width: 200 },
        { field: "ville", headerName: "Ville", width: 150 },
        { field: "description", headerName: "Description", width: 250 }
    ];  
    
    
    
    export const locationColumns = [
              { field: "email", headerName: "E-mail", width: 250
             },
              { field: "id_vehicule", headerName: "ID Véhicule", width: 150 },
              { field: "id_agence", headerName: "ID Agence", width: 150 },
              { field: "date", headerName: "Date", width: 150 },
              { field: "periode", headerName: "Période", width: 150 }
              ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];
  export const agencyRows = [
    { id: 1, nom: "Agency 1", adresse: "1234 Main St", website: "www.agency1.com", email: "agency1@email.com", phone: "555-555-5555", description: "Agency 1 is a full-service marketing and advertising agency that helps businesses grow their online presence." ,photo: "https://media.cdnws.com//_i/136023/p%7B1000%7D-61423/1845/27/top-10-marines-puissants-one-piece-blog-3.jpeg"},
    { id: 2, nom: "Agency 2", adresse: "5678 Elm St",  website: "www.agency2.com", email: "agency2@email.com", phone: "555-555-5555", description: "Agency 2 specializes in creating stunning websites and mobile apps for clients in various industries." ,photo: "https://media.cdnws.com//_i/136023/p%7B1000%7D-61423/1845/27/top-10-marines-puissants-one-piece-blog-3.jpeg"},
    { id: 3, nom: "Agency 3", adresse: "9876 Oak St",  website: "www.agency3.com", email: "agency3@email.com", phone: "555-555-5555", description: "Agency 3 is an award-winning branding and design agency that helps companies establish their brand and improve their visual identity.",photo: "https://media.cdnws.com//_i/136023/p%7B1000%7D-61423/1845/27/top-10-marines-puissants-one-piece-blog-3.jpeg" },
  ];
  export const useRows = [
    { id: 1, image: "https://play-lh.googleusercontent.com/OYlJFC4rf9Lg6kxRPe6JIkHbP5A_51LGtm7bXcOG3xJ5ZQ_gVLOT8Um_Pijcj2NFX0yy", cin: "11123456", nom: "Ahmed", prenom: "Ali", email: "ahmedali@email.com", tel: "25012345", adresse: "Monastir, Tunisia" },
    { id: 2, image: "https://play-lh.googleusercontent.com/OYlJFC4rf9Lg6kxRPe6JIkHbP5A_51LGtm7bXcOG3xJ5ZQ_gVLOT8Um_Pijcj2NFX0yy", cin: "00123456", nom: "Sara", prenom: "Mohamed", email: "saramohamed@email.com", tel: "29012345", adresse: "Monastir, Tunisia" },
    { id: 3, image: "https://play-lh.googleusercontent.com/OYlJFC4rf9Lg6kxRPe6JIkHbP5A_51LGtm7bXcOG3xJ5ZQ_gVLOT8Um_Pijcj2NFX0yy", cin: "11123457", nom: "Mohamed", prenom: "Ahmed", email: "mohamedahmed@email.com", tel: "22012345", adresse: "Monastir, Tunisia" },
    { id: 4, image: "https://play-lh.googleusercontent.com/OYlJFC4rf9Lg6kxRPe6JIkHbP5A_51LGtm7bXcOG3xJ5ZQ_gVLOT8Um_Pijcj2NFX0yy", cin: "00123457", nom: "Fatma", prenom: "Salah", email: "fatmasalah@email.com", tel: "25012346", adresse: "Monastir, Tunisia" }];


    export const veloRows = [
      {
      id: 1,
      image: 'https://cdn.shopify.com/s/files/1/0252/9142/3799/products/kuzancosmic_960x.jpg?v=1617453959',
      id_agence: 1,
      type: 'Vélo de course',
      marque: 'Kuzan',
      nom: 'Cosmic',
      prix: '800$',
      couleur: 'Noir',
      rate: 4.5,
      speed: '24',
      description: 'Le vélo de course Cosmic de Kuzan est équipé d un cadre en carbone haut de gamme et de composants de qualité pour une performance optimale.',
      },
      {
      id: 2,
      image: 'https://assets-us-01.kc-usercontent.com/2001bcb0-bded-005a-c58a-8d775e8404eb/152f7e07-2b43-41bd-8f3b-b76ee9498c4e/UP-B.jpg?w=400',
      id_agence: 2,
      type: 'Vélo de montagne',
      marque: 'Giant',
      nom: 'Trance',
      prix: '1200$',
      couleur: 'Vert',
      rate: 4.8,
      speed: '21',
      description: 'Le vélo de montagne Trance de Giant est équipé d un cadre en aluminium léger et de suspensions avant et arrière pour une performance optimale en tout-terrain.',
      }];

      export const eventRows = [
        { id: 1, img: 'https://i.skyrock.net/2028/77462028/pics/2986734683_1_3_QDCOfiUm.jpg', id_organisation: 1, id_piste: 2, date: '01/01/2022', heure: '16h', adresse: 'Monastir, Tunisia', description: 'Event de course de vélo' },
        { id: 2, img: 'https://i.skyrock.net/2028/77462028/pics/2986734683_1_3_QDCOfiUm.jpg', id_organisation: 2, id_piste: 3, date: '02/01/2022', heure: '17h', adresse: 'Monastir, Tunisia', description: 'Event de course de vélo' },
        { id: 3, img: 'https://i.skyrock.net/2028/77462028/pics/2986734683_1_3_QDCOfiUm.jpg', id_organisation: 3, id_piste: 1, date: '03/01/2022', heure: '18h', adresse: 'Monastir, Tunisia', description: 'Event de course de vélo' },
        { id: 4, img: 'https://i.skyrock.net/2028/77462028/pics/2986734683_1_3_QDCOfiUm.jpg', id_organisation: 4, id_piste: 2, date: '04/01/2022', heure: '19h', adresse: 'Monastir, Tunisia', description: 'Event de course de vélo' },];


        export const clubRows = [
          { id: 1, photo: 'https://ih1.redbubble.net/image.1280873638.0420/st,small,507x507-pad,600x600,f8f8f8.u2.jpg', nom: 'Club 1', adresse: 'Adresse Club 1', description: 'Description Club 1' },
          { id: 2, photo: 'https://ih1.redbubble.net/image.1280873638.0420/st,small,507x507-pad,600x600,f8f8f8.u2.jpg', nom: 'Club 2', adresse: 'Adresse Club 2', description: 'Description Club 2' },
          { id: 3, photo: 'https://ih1.redbubble.net/image.1280873638.0420/st,small,507x507-pad,600x600,f8f8f8.u2.jpg', nom: 'Club 3', adresse: 'Adresse Club 3', description: 'Description Club 3' },
          { id: 4, photo: 'https://ih1.redbubble.net/image.1280873638.0420/st,small,507x507-pad,600x600,f8f8f8.u2.jpg', nom: 'Club 4', adresse: 'Adresse Club 4', description: 'Description Club 4' },
          { id: 5, photo: 'https://ih1.redbubble.net/image.1280873638.0420/st,small,507x507-pad,600x600,f8f8f8.u2.jpg', nom: 'Club 5', adresse: 'Adresse Club 5', description: 'Description Club 5' },
          ];


          export const pisteRows = [
            { id: 1, nom: "Piste 1", ville: "Monastir", description: "Piste pour les débutants" },
            { id: 2, nom: "Piste 2", ville: "Sousse", description: "Piste pour les intermédiaires" },
            { id: 3, nom: "Piste 3", ville: "Monastir", description: "Piste pour les professionnels" },
            { id: 4, nom: "Piste 4", ville: "Sousse", description: "Piste pour les amateurs" },
            { id: 5, nom: "Piste 5", ville: "Monastir", description: "Piste pour les experts" },
            ];
            
          
              
             export const locationRows = [
              {cin: "11123456", id_vehicule: "1", id_agence: "2", date: "2022-05-01", periode: "1 jour" },
              {cin: "11123456", id_vehicule: "2", id_agence: "1", date: "2022-05-02", periode: "2 jours" },
              {cin: "23456789", id_vehicule: "3", id_agence: "3", date: "2022-05-03", periode: "3 jours" },
              {cin: "98765432", id_vehicule: "4", id_agence: "2", date: "2022-05-04", periode: "4 jours" },
              {cin: "45678912", id_vehicule: "5", id_agence: "1", date: "2022-05-05", periode: "5 jours" }
              ]  
            
            