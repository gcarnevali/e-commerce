const productos = [
{
id: 1,
name: "Alborotados Malbec Joven",
price: '$2300',
img:'',
stock: 10,
descripcion: "Malbec joven Finca La Liz 2020"
},
{
id: 2,
name: "LUI Moscatel Dulce",
price: '$3000',
img:'',
stock: 10,
descripcion: "Blanco dulce Bodega LUI 2021"
},
{
id: 3,
name: "La Mitad +1 Malbec",
price: '$2500',
img:'https://www.google.com/search?q=la+mitad+mas+uno+vino&tbm=isch&ved=2ahUKEwjmiMHUu-7-AhWBrZUCHR6CBFgQ2-cCegQIABAA&oq=la+mitad+mas+uno+vino&gs_lcp=CgNpbWcQARgAMgUIABCABDoECCMQJzoICAAQsQMQgwE6CAgAEIAEELEDOgcIABCKBRBDOgsIABCABBCxAxCDAToECAAQAzoECAAQHjoHCAAQGBCABFDhBlj-LmDkMGgBcAB4AIABU4gB9wmSAQIxOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=iYBdZKagF4Hb1sQPnoSSwAU&bih=929&biw=1920&rlz=1C1SQJL_enAR1057AR1057#imgrc=sfZ4R9AGVqFOFM',
stock:10,
descripcion: "Malbec Bodega Durigutti 2020"
},
{
id: 4,
name: "Urraca Blend Gran Reserva",
price: '3500',
img:'https://www.google.com/search?q=urraca+grand+reserva&tbm=isch&ved=2ahUKEwir_MHku-7-AhXOkJUCHTjCD6AQ2-cCegQIABAA&oq=urraca&gs_lcp=CgNpbWcQARgAMgQIIxAnMgoIABCKBRCxAxBDMgcIABCKBRBDMgcIABCKBRBDMgcIABCKBRBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAgAEIAEELEDUOUGWLYLYN4UaABwAHgAgAFTiAGRBJIBATeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=qoBdZKv_Oc6h1sQPuIS_gAo&bih=929&biw=1920&rlz=1C1SQJL_enAR1057AR1057#imgrc=zySu_MsM0294uM',
stock:10,
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

export default productos;