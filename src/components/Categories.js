
import react,{Component} from "react";

class Categories extends react.Component {
  render(){
    return (
     <>
     	<div className="ItemCategory">
     		<button onClick={()=>{this.props.chooseCategory(this.props.data)}}>{this.props.data}</button>
     	</div>	
     </>
    );
  }
}

export default Categories;
