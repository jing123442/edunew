//电话号校验
export function isMobil(rule, value, callback) {
  var patrn = /^1[34578]\d{9}$/;
  console.log(rule, this.form.value, patrn.test(this.form.value))
  if (!patrn.test(this.form.value)) {
    callback(new Error('请输入正确电话号码'))
  } else {
    callback();
  }
}
//身份证号校验
export function isID(rule,value,callback){
    var patrn=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(!patrn.test(this.form.value)){
        callback(new Error('请输入正确身份证号'))
    } else {
      callback();
    }
  }
//姓名/其他中英文（允许中文/英文；字符数限制）
export function isNormalText(rule,value,callback){
    var patrn=/^[\u4E00-\u9FA5]{2,20}$/;
    if(!patrn.test(this.form.value)){
        callback(new Error('请输入中文，20个字符以内'))
    } else {
      callback();
    }
  }




//邮箱校验

//select等校验
export function isSelected(rule,value,callback){
  console.log('value>>>>',this.form.value);
    if(this.form.value){
        callback();
    }else{
        callback(new Error('请选择'))
    }
}