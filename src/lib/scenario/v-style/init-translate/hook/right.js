/************************
 * 右边页面Translate钩子
 ************************/

export function rightTranslate(styleDataset) {

  let middlePageStyle = styleDataset.getPageStyle('middle', 'right')
  let rightPageStyle = styleDataset.getPageStyle('right')

  //中间：溢出
  if(middlePageStyle && middlePageStyle.visualLeftInteger) {
    //右边：溢出
    if(rightPageStyle && rightPageStyle.visualLeftInteger) {
      return rightPageStyle.visualWidth - rightPageStyle.visualLeftInteger
    }
    //右边：正常
    else {
      return rightPageStyle.visualWidth + middlePageStyle.visualLeftInteger
    }
  }
  //中间：正常
  else {
    //右边：溢出
    if(rightPageStyle && rightPageStyle.visualLeftInteger) {
      return rightPageStyle.visualWidth - rightPageStyle.visualLeftInteger
    }
    //右边：正常
    else {
      return rightPageStyle.visualWidth + rightPageStyle.visualLeftInteger
    }
  }



}
