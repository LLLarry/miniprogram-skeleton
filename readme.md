## 小程序骨架屏

**使用方法：**
```jsx
<!--引入骨架屏模版 -->
<skeleton a:if="{{showSkeleton}}"></skeleton>

<!--index.axml-->
<!--给页面根节点class添加skeleton, 用于获取当前页面尺寸，没有的话就默认使用屏幕尺寸-->
<view class="container skeleton">
    <view class="userinfo">
        <block>
	        <!--skeleton-radius 绘制圆形-->
            <image class="userinfo-avatar skeleton-radius" src="{{userInfo.avatarUrl}}"
                   mode="cover"></image>
             <!--skeleton-rect 绘制矩形-->
            <text class="userinfo-nickname skeleton-rect">{{userInfo.nickName}}</text>
        </block>
    </view>
    <view style="margin: 20px 0">
        <view a:for="{{lists}}" class="lists">
            <icon type="success" size="20" class="list skeleton-radius"/>
            <text class="skeleton-rect">{{item}}</text>
        </view>
    </view>

    <view class="usermotto">
        <text class="user-motto skeleton-rect">{{motto}}</text>
    </view>

    <view style="margin-top: 200px;">
        aaaaaaaaaaa
    </view>
</view>
```

**2、在js页面使用如下**
```js
//index.js
//初始化默认的数据，用于撑开页面结构，让骨架屏可以获取到整体的页面结构
Page({
	data: {
		motto: 'Hello World',
		userInfo: {
			avatarUrl: 'https://a.qlogo.cn/mmopen/vi_32/SYiaiba5faeraYBoQCWdsBX4hSjFKiawzhIpnXjejDtjmiaFqMqhIlRBqR7IVdbKE51npeF6X1cXxtDQD2bzehgqMA/132',
			nickName: 'jayzou'
		},
		lists: [
			'aslkdnoakjbsnfkajbfk',
			'qwrwfhbfdvndgndghndeghsdfh',
			'qweqwtefhfhgmjfgjdfghaefdhsdfgdfh',
		],
		showSkeleton: true   //骨架屏显示隐藏
	},
	onLoad: function () {
		const that = this;
		setTimeout(() => {     //3S后隐藏骨架屏
			that.setData({
				showSkeleton: false
			})
		}, 3000)
	}
})
```

**3、自定义配置**
###### 

| 属性        | 描述          | 类型             |
| :----------| -------------| ------------------|
| bgColor    | 底层背景色    | string            |
| fgColor    | 前景色       | string             |
