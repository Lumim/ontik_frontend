import { data, error } from 'jquery';
import React, { useEffect, useState } from 'react'
import fetchApi from '../../controller/fetchApi'
const Landing=()=> {
const[products,setProduct]=useState([]);
const[data_cat,setDcat]=useState([]);
const host= fetchApi.getHost();
const [cartData,setCart] = useState([])
useEffect(()=>{
    getProductFromServer();
},[])
const getProductFromServer=async()=>{
    const res = await fetchApi.getApi('api/web/getAllProducts','POST',null,0);
    if(res.data.length>0){
        setProduct(res.products);
    setDcat(res.data);
    }

}


const cartClick= async(e,id)=>{
    e.preventDefault();
    if(cartData.length>0){
        setCart([...cartData,id]);
    }
    else{
        setCart([...cartData,id]);
    }

    
    console.log(cartData.toString());

    localStorage.setItem('cart_data',cartData.toString());

}
    return (
       <>

    <body>

            <section className="section-pagetop bg">
            <div className="container">
                <h2 className="title-page">Category products</h2>
                <nav>
                <ol className="breadcrumb text-white">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Best category</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Great articles</li>
                </ol>  
                </nav>
            </div> 
            </section>



            <section className="section-content padding-y">
            <div className="container">

            <div className="row">
                <aside className="col-md-3">
                    
            <div className="card">
                <article className="filter-group">
                    <header className="card-header">
                        <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                            
                            <h6 className="title">Menu</h6>
                        </a>
                       {/*  <a href="#" data-toggle="collapse" data-target="#collapse_12" id="collapse_10" aria-expanded="true" className="collapse hide">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">sub_category</h6>
                        </a> */}
                    </header>
                    <div className="filter-content collapse hide" id="collapse_1" >
                        <div className="card-body">
                          {/*   <form className="pb-3">
                             <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-append">
                                <button className="btn btn-light" type="button"><i className="fa fa-search"></i></button>
                            </div>
                            </div> 
                            </form> */}
                            
                            <ul className="list-group">
                            {!data_cat?<>loading...</>:data_cat.map(cat=>{return(
                                <>
                                 <li className="list-group-item"><a data-toggle="collapse" data-target={"#collapse"+cat.id} aria-expanded="true" href=""> <i className="icon-control fa fa-chevron-right"></i> {cat.name}  </a></li>
                                  
                                 <div className="collapse hide" id={'collapse'+cat.id}>
                                    {!cat.data_array?<></>:cat.data_array.map(xx=>{return(
                                        
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <a ><i className="icon-control fa fa-chevron-up"></i> {xx.name}</a>
                                                </li>
                                            </ul>
                                        
                                    )})}</div> </>
                            )})}
                            {/* <li><a data-toggle="collapse" data-target="#collapse_12" aria-expanded="true" href="">category  </a></li>
                                <div className=" collapse hide" id="collapse_12">
                                    <ul>
                                        <li>
                                            <a >sub category</a>
                                        </li>
                                    </ul>
                                </div> */}
                            </ul>

                        </div> 
                    </div> 
                </article> 
                <article className="filter-group">
                    <header className="card-header">
                        <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Brands </h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_2">
                        <div className="card-body">
                            <label className="custom-control custom-checkbox">
                            <input type="checkbox" checked="" className="custom-control-input"/>
                            <div className="custom-control-label">Mercedes  
                                <b className="badge badge-pill badge-light float-right">120</b>  </div>
                            </label>
                            <label className="custom-control custom-checkbox">
                            <input type="checkbox" checked="checked" className="custom-control-input"/>
                            <div className="custom-control-label">Toyota 
                                <b className="badge badge-pill badge-light float-right">15</b>  </div>
                            </label>
                            <label className="custom-control custom-checkbox">
                            <input type="checkbox" checked="" className="custom-control-input"/>
                            <div className="custom-control-label">Mitsubishi 
                                <b className="badge badge-pill badge-light float-right">35</b> </div>
                            </label>
                            <label className="custom-control custom-checkbox">
                            <input type="checkbox" checked="" className="custom-control-input"/>
                            <div className="custom-control-label">Nissan 
                                <b className="badge badge-pill badge-light float-right">89</b> </div>
                            </label>
                            <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input"/>
                            <div className="custom-control-label">Honda 
                                <b className="badge badge-pill badge-light float-right">30</b>  </div>
                            </label>
                </div> 
                    </div>
                </article>
                <article className="filter-group">
                    <header className="card-header">
                        <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Price range </h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_3">
                        <div className="card-body">
                            <input type="range" className="custom-range" min="0" max="100" name=""/>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                            <label>Min</label>
                            <input className="form-control" placeholder="$0" type="number"/>
                            </div>
                            <div className="form-group text-right col-md-6">
                            <label>Max</label>
                            <input className="form-control" placeholder="$1,0000" type="number"/>
                            </div>
                            </div> 
                            <button className="btn btn-block btn-pink">Apply</button>
                        </div>
                    </div>
                </article> 
                <article className="filter-group">
                    <header className="card-header">
                        <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">Sizes </h6>
                        </a>
                    </header>
                    <div className="filter-content collapse show" id="collapse_4" >
                        <div className="card-body">
                        <label className="checkbox-btn">
                            <input type="checkbox"/>
                            <span className="btn btn-light"> XS </span>
                        </label>

                        <label className="checkbox-btn">
                            <input type="checkbox"/>
                            <span className="btn btn-light"> SM </span>
                        </label>

                        <label className="checkbox-btn">
                            <input type="checkbox"/>
                            <span className="btn btn-light"> LG </span>
                        </label>

                        <label className="checkbox-btn">
                            <input type="checkbox"/>
                            <span className="btn btn-light"> XXL </span>
                        </label>
                    </div>
                    </div>
                </article> 
                <article className="filter-group">
                    <header className="card-header">
                        <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" className="">
                            <i className="icon-control fa fa-chevron-down"></i>
                            <h6 className="title">More filter </h6>
                        </a>
                    </header>
                    <div className="filter-content collapse in" id="collapse_5">
                        <div className="card-body">
                            <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" checked="" className="custom-control-input"/>
                            <div className="custom-control-label">Any condition</div>
                            </label>

                            <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input"/>
                            <div className="custom-control-label">Brand new </div>
                            </label>

                            <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input"/>
                            <div className="custom-control-label">Used items</div>
                            </label>

                            <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input"/>
                            <div className="custom-control-label">Very old</div>
                            </label>
                        </div>
                    </div>
                </article> 
            </div>

                </aside>
	<main className="col-md-9">

<header className="border-bottom mb-4 pb-3">
		<div className="form-inline">
			<span className="mr-md-auto">{products.length} Items found </span>
			<select className="mr-2 form-control">
				<option>Latest items</option>
				<option>Trending</option>
				<option>Most Popular</option>
				<option>Cheapest</option>
			</select>
			<div className="btn-group">
				<a href="#" className="btn btn-outline-secondary" data-toggle="tooltip" title="List view"> 
					<i className="fa fa-bars"></i></a>
				<a href="#" className="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view"> 
					<i className="fa fa-th"></i></a>
			</div>
		</div>
</header>
<div className="row">
        {!products?<>...loading</>:products.map(pr=>(

        
            <div className="col-md-4">
                <figure className="card card-product-grid">
                    <div className="img-wrap"> 
                        {/* <span className="badge badge-danger"> NEW </span> */}
                       
                        <img src={host+'images/'+JSON.parse(pr.image_path)[0]} height="250px" width="100%" />
                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption className="info-wrap">
                        <div className="fix-height">
                            <a href={"/product/"+pr.id} className="title">{pr.name}</a>
                            <div className="price-wrap mt-2">
                                <span className="price">{pr.price-pr.discount}</span>
                               {!pr.discount?<></>: <del className="price-old">{pr.price}</del>}
                            </div> 
                        </div>
                        <a className="btn btn-block btn-pink text-white" onClick={e=>cartClick(e,pr.id)} ><i class="fas fa-shopping-cart"></i> Add to cart </a>
                    </figcaption>
                </figure>
            </div>

        

        ))}
        </div> 


           {/*  <nav className="mt-4" aria-label="Page navigation sample">
            <ul className="pagination">
                <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
            </nav> */}

	</main> 

</div>

</div>
</section>



</body>

        </>
    )
}

export default Landing
