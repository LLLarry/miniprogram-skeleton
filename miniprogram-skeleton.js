Component({
  mixins: [],
  data: {
    skeleton: [],
    skeletonRect: [],
    skeletonRadius: [],
  },
  props: {
    bgColor: '#fff', //背景色
    fgColor: '#D9D9D9', //前景色
  },
  didMount() {
    this.handleSkeleton()
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 处理skeleton
    handleSkeleton(){
      my.createSelectorQuery()
        .selectAll('.skeleton').boundingClientRect()
        .selectAll('.skeleton-rect').boundingClientRect()
        .selectAll('.skeleton-radius').boundingClientRect()
        .selectViewport().boundingClientRect()
        .exec(res=>{
          try{
            const data={
              skeleton: this.fmtData(res[0] || [res[3]],1), //获取父元素或者屏幕视口大小
              skeletonRect: this.fmtData(res[1],2),
              skeletonRadius: this.fmtData(res[2],3),
            }
            this.setData(data)
          }catch(err){

          }
          
      })
    },

    // 格式化数据
  fmtData(list,type=1){ // type 2方形 3原型
      try{
        return list && list.map(item=>{
          let styleStr= type == 1 ? `position: fixed; backgroundColor: ${this.props.bgColor}; z-index: 99999;` : type == 2 ? 
        `position: fixed;backgroundColor:${this.props.fgColor};` :
        `position: fixed;backgroundColor:${this.props.fgColor};borderRadius : 50%;`
          for(let key in item){
            if(item.hasOwnProperty(key)){
              if(type == 1){
                styleStr+= `${key}:${item[key]}px;`
              }else if(type == 2){
                styleStr+= `${key}:${item[key]}px;`
              }else{
                item['width'] > item['height'] ? item['width']= item['height'] : item['height']= item['width']
                styleStr+= `${key}:${item[key]}px;`
              }
            }
          }
          return styleStr
        })
      }catch(err){

      }
    }
  },
});
