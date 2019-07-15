# util-store

> 业务常用工具类集合


[项目地址](git@git.cai-inc.com:ZCY-FE/zcy-utilStore-front.git)

## 项目npm命令

- `npm run dev` 启动自动化测试监听
- `npm run build` 项目编译
- `npm run test` 测试
- `karma start` 执行测试用例
- `npm run lint-fix` eslint fix



## 安装

```bash
npm install util-store --save
```


## 使用

```js
import {
  fixDateRequestParams,
  formatCommonDate,
  formatThousandsSeparator,
  formatCentToYuan,
  formatYuanToCent,
  formatString,
  matchRelevantValue,
  mergeTableCellData,
} from 'util-store';
```

<br/>

#  API 文档

<br/>
<br/>

## fixDateRequestParams 格式化时间区间

### 方法详解

> 说明
 
- 此方法一般用于格式化时间区间，将时间戳转换为所需要的时间格式
- 开始时间: `(YYYY-MM-DD 00:00:00)`
- 结束时间: `(YYYY-MM-DD 23:59:59)`

> 参数

| 入参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
| date         | number   | 时间戳        | 1546272000000 |
| isEnd        | boolean  | 是否是结束时间 | true/false    |

<br/>

| 出参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
|   *      | string   | 转换后的时间       | 2019-01-01 00:00:00 |

> 方法

```javascript
function fixDateRequestParams(date， isEnd) {
    if (!date) {
      return '';
    }
    if (!isEnd) {
      return `${moment(date).format('YYYY-MM-DD')} 00:00:00`;
    } else {
      return `${moment(date).format('YYYY-MM-DD')} 23:59:59`;
    }
  }
```


### 示例

> 代码示例1


```javascript
fixDateRequestParams(1546272000000)
===> 2019-01-01 00:00:00
```

<br/>

> 代码示例2
 

```javascript
fixDateRequestParams(1546272000000,true) 
===> 2019-01-01 23:59:59
```
<br/>
<br/>

---

<br/>
<br/>

## formatCommonDate 格式化时间

### 方法详解

> 说明
 
- 此方法一般用于格式化时间，将时间戳转换为所需要的时间格式
- `(YYYY-MM-DD)`
- `(YYYY-MM-DD HH:mm:ss)`

> 参数

| 入参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
| date         | number   | 时间戳        | 1546272000000 |
| fullDate        | boolean  | 是否转化为时分秒格式的时间 | true/false    |

<br/>

| 出参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
|   *      | string   | 转换后的时间       | 2019-01-01 00:00:00 |

> 方法

```javascript
function formatCommonDate(date, fullDate) {
    if (!date) {
      return '-';
    }
  
    const formatType = fullDate ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
  
    return moment(date).format(formatType);
  }
```


### 示例

> 代码示例1


```javascript
formatCommonDate(1546272000000) 
===> 2019-01-01
```

<br/>

> 代码示例2



```javascript
formatCommonDate(1546272000000,true) 
===> 2019-01-01 00:00:00
```

<br/>
<br/>

---


<br/>
<br/>

## formatThousandsSeparator 数字格式化为千分位

### 方法详解

> 说明
 
- 此方法一般用于格式化金额，将金额转化为千分位计数

> 参数

| 入参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
| targetNumber  | number   | 金额        | 1000 |
| fractionDigits| number|小数点后保留位数|   2 |

<br/>

| 出参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
|  num       |*   | 转换后的金额        | 1,000.00|


> 方法

```javascript
formatThousandsSeparator(targetNumber, fractionDigits) {
    if (!targetNumber && targetNumber !== 0) {
      return '';
    }
  
    if (targetNumber === 0) {
      return 0;
    }
  
    let minus = false;
    /**
       * 兼容负数
       */
    if (targetNumber < 0) {
      minus = true;
      targetNumber = Math.abs(targetNumber);
    }
    fractionDigits = fractionDigits >= 0 && fractionDigits <= 20 ? fractionDigits : 2;
    /**
     * replace(/[^\d\.-]/g, '')
     * 匹配 除数字、逗号（,）、短横线（ - 负数符号）之外的字符串,替换成''
     * eq: 'a123'.replace(/[^\d\.-]/g, '') === 123
     * eq: 'a123bc'.replace(/[^\d\.-]/g, '0') === 012300
     * eq: 'a123-'.replace(/[^\d\.-]/g, '0') === 0123-
     */
    targetNumber = `${parseFloat((`${targetNumber}`).replace(/[^\d\.-]/g, '')).toFixed(fractionDigits)}`;
    const reversedSplitNumber = targetNumber.split('.')[0].split('').reverse();
    // 小数位
    const decimalPlace = targetNumber.split('.')[1];
    let reversedString = '';
    for (let i = 0; i < reversedSplitNumber.length; i += 1) {
      reversedString += reversedSplitNumber[i] + ((i + 1) % 3 === 0 && (i + 1) !== reversedSplitNumber.length ? ',' : '');
    }
    /**
       * 兼容负数和整数
       */
    return `${minus ? '-' : ''}${reversedString.split('').reverse().join('')}${decimalPlace ? `.${decimalPlace}` : ''}`;
  }
```


### 示例


> 代码示例



```javascript
formatThousandsSeparator(1000,2) 
===> 1,000.00
```

<br/>
<br/>

---

<br/>
<br/>

## formatCentToYuan 格式化金额--由分转换为元

### 方法详解

> 说明
 
- 此方法一般用于格式化金额，将单位为分的金额转换成单位为元的金额，并转换为千位计数法

> 参数

| 入参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
| num         | number   | 金额        | 100000 |
| thousandsSeparator        | boolean  | 是否转为千位计数，默认为`true` | true/false    |
| fractionDigits        | number  | 小数点后保留位数，默认为`2` | 2    |

<br/>

| 出参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
|  *       |*   | 转换后的金额        | 1,000.00 |


> 方法

```javascript
function formatCentToYuan(num, thousandsSeparator = true, fractionDigits = 2) {
    if (!num && num !== 0) {
      return '-';
    }
  
    if (isNaN(num)) {
      return '-';
    }
  
    let yuan = NP.divide(num, 100);
    yuan = NP.round(yuan, fractionDigits);
    if (!thousandsSeparator) {
      return yuan;
    }
  
    return formatThousandsSeparator(yuan, fractionDigits);
  }
```


### 示例


> 代码示例1

```javascript
formatCentToYuan(100000,true,2) 
===> 1,000.00
```

<br/>

> 代码示例2


```javascript
formatCentToYuan(100000, false) 
===> 1000
```
<br/>
<br/>

---

<br/>
<br/>

## formatYuanToCent 金额转换--由元转换为分

### 方法详解

> 说明
 
- 此方法一般用于格式化金额，将单位为元的金额转换成单位为分的金额

> 参数

| 入参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
| num         | number   | 金额        | 100 |

<br/>

| 出参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
|  num       |*   | 转换后的金额        | 10000 |


> 方法

```javascript
 function formatYuanToCent(num) {
    // 需要保留两位小数,并乘以100
    if (!num && num !== 0) {
      return '';
    }
  
    if (isNaN(num)) {
      return '';
    }
  
    num = NP.times(num, 100);
    num = NP.round(num, 0);
    return num;
  }
```


### 示例


> 代码示例



```javascript
formatYuanToCent(100) 
===> 10000
```

<br/>
<br/>

---

<br/>
<br/>

## formatString 格式化字符串

### 方法详解

> 说明
 
- 此方法一般用于格式化字符串，若为null、undefined、‘’，转化为‘-’

> 参数

| 入参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
| str         | string   | 字符串        | '这是字符串' |

<br/>

| 出参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
|  str       | string  | 格式化后的字符串        | '这是字符串' |


> 方法

```javascript
 function formatString(str) {
    if (!str) {
      return '-';
    }
    return str;
  }
```


### 示例


> 代码示例1:



```javascript
formatString(str) 
===> '这是字符串'
```

<br/>

> 代码示例2:


```javascript
formatString(str) 
===> '-'
```

<br/>
<br/>

---

<br/>
<br/>

## matchRelevantValue 根据某个key值匹配对应的value

### 方法详解

> 说明
 
- 此方法一般根据某个key值，匹配对应的value

> 参数

| 入参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
| type         |*   | 代表某个唯一的key       | 1 |
| typeConfig   | array   | 多个对象对组成的数组  | [...]|
| keyName   | string   | 数组中,代表key的字段, 默认为`label`  | label|
| valueName   | string   | 数组中,代表value的字段, 默认为`value`    | value|

<br/>

| 出参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
|  str       | string  | 格式化后的字符串        | '这是字符串' |


> 方法

```javascript
function matchRelevantValue(type, typeConfig = [], keyName = 'label', valueName = 'value') {
  let value = '-';
  typeConfig.every((info) => {
    if (info[`${keyName}`] === type) {
      value = info[`${valueName}`];
      return false;
    }
    return true;
  });
  return value;
}
```


### 示例


> 代码示例


```javascript
const arr = [
    {
        label:1,
        value:'例1'
    }, {
        label:2,
        value:'例2'
    }
]

matchRelevantValue( 1 ,arr ) 
===> '例1'
```


<br/>
<br/>

---


<br/>
<br/>

## mergeTableCellData 合并表格单元格数据

### 方法详解

> 说明
 
- 此方法一般把相邻行，同一个字段相同的值，合并为一个单元格
- 前提: 后端返回数组时需要按顺序排序

> 参数

| 入参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
| data         |array   | 表格数据       | [...] |
| field   | string   | 指定字段  | 'fileId'|

<br/>

| 出参          | 类型     | 描述          | 示例          |
| :------      |-------   |-----         | -----        |
|  data       | array  | 根据合并字段重新组成的数组        | [...] |


> 方法

```javascript
function mergeTableCellData(data = [], field) {

  if (!data||!data.length) {
    return [];
  }
  const repeatCounter = {};
  const marked = {};
  data.forEach((item) => {
    const itemField = item[field];
    repeatCounter[itemField] = repeatCounter[itemField] ? repeatCounter[itemField] += 1 : 1;
  });
  data.forEach((item) => {
    const itemField = item[field];
    if (repeatCounter[itemField] > 1) {
      item.numkit = marked[itemField] ? 0 : repeatCounter[itemField];
      marked[itemField] = true;
      return;
    }
    item.numkit = 1;
  });
  return data;
}
```


### 示例


> 代码示例

假设参数为: 



```javascript
const arr = [
   {
     id: 1,
     exampleId: 1,
     example: '这是例子1',
   },{
     id: 2,
     exampleId: 1,
     example: '这是例子1',
   }
  ]
mergeTableCellData( arr ,'exampleId' ) 
===> 
data = [
  {
     id: 1,
     exampleId: 1,
     example: '这是例子1',
     numkit: 2,
   },{
     id: 2,
     exampleId: 1,
     example: '这是例子1',
     numkit: 0,
   }
 ]
```


<br/>
<br/>

---

## 涉及技术栈

- [x] [karma](https://karma-runner.github.io/latest/index.html)
- [x] [Webpack](https://webpack.github.io)
- [x] [Babel](https://babeljs.io/)


## 参与建设

- 提交新util
    - 请找@子洋开通项目权限
    - 拉取feature分支
    - 开发自测完成，确保添加对应util的测试用例并100%执行通过
    - 提交merge request
    

-  commit提交规范
    - feat: 新功能
    - fix:  修复问题
    - docs: 修改文档，添加注释说明
    - style: 修改代码格式，不影响代码逻辑
    - refactor: 重构代码，理论上不影响现有功能
    - perf: 提升性能
    - test: 增加修改测试用例
    - chore: 修改工具相关（包括但不限于文档、代码生成等）
    - deps: 升级依赖



