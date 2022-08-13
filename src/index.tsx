import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createServer, Model } from 'miragejs';
import db from 'miragejs/db';

createServer({
  models: {
    task: Model,
  },

  seeds(server) {
    server.db.loadData({
      tasks: [
        {
          id: 1,
          title: 'Estudar',
          isComplete: false,
        },
        {
          id: 2,
          title: 'Tomar Café',
          isComplete: false,
        }
      ],
    });
  },


  routes() {
    this.namespace = 'api';

    this.get('/tasks',() => {
      return this.schema.all('task')
    })

    this.post('/tasks', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('task', data);
    });

    this.delete('/tasks/:id', (schema, request) => {
      const id = request.params.id;
      console.log("chegou na rota", id);

      schema.db.task.remove(id);
      return true;
    });

  }
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
