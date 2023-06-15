
  const productos = [
    {
    id: 1,
    name: "Aguijon de Abeja Malbec",
    category: "Tintos",
    price: 2300,
    img:'/src/assets/aguijon.jpeg',
    stock: 5,
    descripcion: "Malbec joven Finca La Liz 2020"
    },
    {
    id: 2,
    name: "LUI Moscatel Dulce",
    category: "Blancos",
    price: 3000,
    img:'/src/assets/Lui Moscatel.jpeg',
    stock: 5,
    descripcion: "Blanco dulce Bodega LUI 2021"
    },
    {
    id: 3,
    name: "La Mitad +1 Malbec",
    category: "Tintos",
    price: 2500,
    img:'/src/assets/Vino Boca.jpg',
    descripcion: "Malbec Bodega Durigutti 2020"
    },
    {
    id: 4,
    name: "Urraca Blend Gran Reserva",
    category: "Tintos",
    price: 3500,
    img: '/src/assets/Urraca Reserva.png',
    stock: 5,
    descripcion: "Malbec blend Urraca Vineyards 2014"
    }
    ];
    
    export const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 500)
        })
    }

    export const getProductoById = (productoId) => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos.find(prod => prod.id === parseInt((productoId))))
            }, 500)
        })
    }
    
    export const getProductoByCategory = (productoCategory) => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos.find(prod => prod.category === parseInt((productoCategory))))
            })
        })
        
    }

    export default productos;
