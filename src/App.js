
import './App.css';
import react,{Component} from "react";
import Categories from "./components/Categories";
import Products from "./components/Products";
import dataT from "./data/index";
class App extends react.Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      Allcategory:[],
      category:'All'
    };
  }
  getAllCategories=()=>{
    let categories=["All"];
    dataT.forEach((item, index)=>{
      if(categories.indexOf(item.category)===-1){
           categories.push(item.category);
      }
    });
    this.setState({
      Allcategory:categories
    });
  }

  componentDidMount(){
    this.setState({
      data:dataT
    });
    this.getAllCategories();
  }

  renderProductItems=()=>{
    return this.state.data.map(e=>{
      return <Products data={e} key={e.id} />
    });
  }

   renderCategoryItems=()=>{
    return this.state.Allcategory.map((e,index)=>{
      return <Categories data={e} key={index} chooseCategory={this.chooseCategory} />
    });
  }

  chooseCategory=(data)=>{

     let searchValueByCategory=[];
       dataT.forEach((e,index)=>{
      if(data=="All" || data==e.category ){
          searchValueByCategory.push(e);
      }
      });
    this.setState({
      category:data,
      data:searchValueByCategory
    });
  }
  render(){
    const {data}=this.state;
    if(this.state.data.length==0){
      return (
        <div className="App">
          <p>Loading...</p>
        </div>
        );
    }else{
      return (
        <div className="App">
          <div className="container">
            <div className="Title">
                <h3>Our Menu</h3>
            </div>
            <div className="line_width">

            </div>
            <div className="category">
              <div className="groupCategories">
                {this.renderCategoryItems()}
              </div>
            </div>
            <div className="ListProducts">
                {this.renderProductItems()}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
