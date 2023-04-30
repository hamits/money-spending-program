


function Product(product, basket, setBasket) {

    const basketItem = basket.find(item => item.id === product.id)


    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }
        else {
            setBasket([...basket, { id: product.id,title:product.title,prize:product.prize,amount: 1}])
        }
    }

    const removeBasket = () => {
        const checkedBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        checkedBasket.amount -= 1
        setBasket([...basket.filter(item => item.id !== product.id), checkedBasket])
        if(checkedBasket.amount===0){
            setBasket([...basketWithoutCurrent]);
        }
    }



    return (
        <div key={product.id} className="productContainer">
            <img src={product.image} className="productImage" alt=""></img>
            <h5>{product.title}</h5>
            <p>{product.prize}</p>
            <div className="actions">
                <button className="btn btn-sell" disabled={!basketItem} onClick={removeBasket}>Çıkart</button>
                <span className="amount">{basketItem ? basketItem.amount : 0}</span>
                <button className="btn btn-buy" onClick={addBasket}>Satın Al</button>
            </div>
        </div>
    )
}

export default Product