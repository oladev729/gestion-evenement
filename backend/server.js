const express = require('express'); 
const app = express(); 
 
app.use(express.json()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
 
app.get('/', (req, res) =
  res.send('API Gestion Evenement'); 
}); 
 
 
  console.log(`Serveur d‚marr‚ sur le port ${port}`); 
}); 
