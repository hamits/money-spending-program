

function Basket(basket) {

    let totalPrize = 0


    return (
        <div key={basket.id} className="basketContainer">
            <h1>Alışveriş Detayları</h1>
            {basket.map(e => {
                return (
                    <div className="basketProduct">
                        <h3>{e.title}</h3>
                        <span>{e.prize}</span>
                        <span>x{e.amount}</span>
                        <h3>{e.amount * e.prize}</h3>
                        <div className="displayNone">{totalPrize += e.prize * e.amount}</div>
                    </div>
                )
            })}

            <h3 className="totalPrize">{totalPrize === 0 ? "Sepet Boş" : totalPrize}</h3>
        </div>
    )

}

export default Basket