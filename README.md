# react-native-code-push-assets
优化 react-native-code-push 第一次更新时采用差异化增量更新。
##### 使用：
###### 1.分别将 android、ios目录下的代码导入自己项目工程
###### 2.android 需要在 MainApplication 中注册 package
```java
        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new AssetsLoadPackage()
            );
        }
```
###### 3.参考 App.js文件，使用即可
```javascript
        import AssetsLoader from './index';
        // hook 执行
        AssetsLoader.initAssetsLoader();
```
