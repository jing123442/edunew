// export var pass = [
//     {
//         validator(rule, value, callback) {
//             if (value === '') { //输入的密码为‘’
//                 callback(new Error('请输入密码'));
//             } else { //输入了正确的密码
//                 if (this.formData.checkPass !== '') {
//                     //如果再次输入的密码不为''
//                     this
//                         .$refs
//                         .ruleForm2
//                         .validateField('checkPass'); //这里主动调用checkass的校验
//                 }
//                 callback();
//             }
//         },
//         trigger: 'blur'
//     }
// ]

// export var checkPass = [
//     {
//         required: true,
//         message: '请填写密码',
//         trigger: 'blur'
//     },
//      {
//         validator(rule, value, callback) {
//             if (value === '') {
//                 callback(new Error('请再次输入密码'));
//             } else if (value !== this.formData.pass) {
//                 callback(new Error('两次输入密码不一致!'));
//             } else {
//                 callback();
//             }
//         },
//         trigger: 'blur'
//     }
// ];
// export var age = [
//     {
//         validator(rule, value, callback) { //这里的value是获取的页面输入的值callback是用于输出提示语的方法
//             if (!value) {
//                 return callback(new Error('年龄不能为空'));
//             }
//             setTimeout(() => {
//                 if (!Number.isInteger(value * 1)) {
//                     callback(new Error('请输入数字值'));
//                 } else {
//                     if (value < 18) {
//                         callback(new Error('必须年满18岁'));
//                     } else {
//                         callback();
//                     }
//                 }
//             }, 1000);
//         },
//         trigger: 'blur'
//     }
// ];