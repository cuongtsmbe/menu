
import react,{Component} from "react";

class Products extends react.Component {
  render(){
  	const {data}=this.props;
    return (
     <>
     	<div className="ItemProduct">
     		<div className="divImage">
     			<img src={data.img} alt="no image" />
     		</div>
     		<div className="Info_Item">
     			<div className="name_price">
     				<div className="name">
     					{data.title}
     				</div>
     				<div className="price">
     					${data.price}
     				</div>
     			</div>
     			<div className="detailItem">
     				<p>{data.desc}</p>
     			</div>
     		</div>
     	</div>	
     </>
    );
  }
}

export default Products;
