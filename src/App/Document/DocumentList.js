import React,{Component} from 'react';
import DocumentContent from './DocumentContent'
import { message} from 'antd';
import './DocumentList.css';

class Article extends Component{
    componentDidMount(){
        this.getListData();
    
    };
    state={list:[]};
    getListData=()=>{
      fetch('/api/article/list').then(response=>{
        if(response.ok){
            return response.json();
        }else{
            message.error(response.statusText);
        }
    }).then(result=>{
          try{
            if(result.data){ 
              this.setState({list:result.data});
            }
          }catch(err){
            console.log(err);
          }
      })
    };
    render(){
        let articleContents=[];
        this.state.list.forEach((element,index,array)=>{
        articleContents.push(<ArticleContent element={element}  key={index}/>)
        });
        return (<div className="articleList">{articleContents}</div>)
    }
}
export default Article;