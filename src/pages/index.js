const { Fragment, useEffect, useState } = require("react");

function Home () {

    const [str, setStr] = useState(" ")

    useEffect( function () {
        fetch("http://47.113.218.167:8081/zx")
            .then((res) => {
               return res.text()
            })
            .then((data) => {
                console.log(str)
                setStr(data)
            }) 
    }, [])

    return (
        <Fragment>
          <h1>demo</h1>
          <h1>{str}</h1> 
        </Fragment>
    )
}

function getStaticProps(){

}

export default Home;