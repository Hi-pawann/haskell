import * as ts from "typescript" 
export const ConsoleRule={
  name:'no-console'
  , 
  check:(node:tsNode)=>{
    if(ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)){
    const symbol = node.expressiom.getText();
      if(symbol==='console'){
        message:"avoid using console statements ",
          location:node.getSourceFile().filename;
        , 
        line:node.getStart()
        
      }
  }
    return null;
  }
  
}
