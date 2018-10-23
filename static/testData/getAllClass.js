export var getAllClass = { //获取所有班级

    "classList|1-10": [
        {
            "index|+1": 1,
            "classId|40": /[0-9a-z]/,
            "classCode": function () {
                var num = Math.round(Math.random() * 10 + 1)
                return '测试' + num + '班'
            },
            "professionName": "移动互联开发",
            "schoolName": "青岛实训基地",
            "teacherOne": "架构师测试",
            "teacherTwo": "项目经理测试",
            "classState": /[YN]/,
            "classStuCount|2-20": 0
        }
    ]
}

export var getAllSchool = { //3.4	获取所有学校
    schoolList: [
        {
            schoolName: '青岛学校1',
            schoolCode: 'QD01'
        }, {
            schoolName: '青岛学校2',
            schoolCode: 'QD02'
        }, {
            schoolName: '青岛学校3',
            schoolCode: 'QD03'
        }, {
            schoolName: '青岛学校4',
            schoolCode: 'QD04'
        },
    ]
}
export var getAllProfession = { //3.5	获取专业
    professionList: [
        {
            professionCode: '01',
            professionName: '移动互联前端'
        },{
            professionCode: '02',
            professionName: 'JAVA+大数据'
        },{
            professionCode: '03',
            professionName: '人工智能'
        },
    ]
}
export var getAllProduct = { //3.6	获取产品
    'productList|3': [
        {
            'productName|+1': ['前端','Java','大数据'],
            productCode: '01'
        }
    ]
}

export var addCourse = { //3.7添加所有课程
    addCourseFlag: 'success'
}

export var getAllCourse = { //3.8	获取所有课程
    courseList: [
        {
            index: 1,
            courseId: '0155555',
            courseCode: '5465656565698',
            courseName: '前端测试课程',
            professionName: '移动互联产品研发',
            schoolName: "青岛实训基地",
            courseState: 'Y'
        }
    ]
}
export var getCourseById = { //3.10	通过ID获取课程名称和内容
    courseList: [
        {

            courseId: '0155555',
            courseName: '前端测试课程',
            courseContent: "测试移动互联网前端3",
            professionCode: '01',
            schoolCode: "QD01",
            productCode: '01'
        }
    ]
}
export var updateCourse = { //3.11	修改课程
    updateCourseFlag: 'success'

}
export var getTeacherList = { //3.12	查询教师
    teacherList: [
        {
            pxTeacherId: "53445685",
            pxTeacherName: "架构师"
        }
    ]
}
export var addClass = { //3.13	增加班级
    addClassFlag: 'success'
}

export var getClassByCondition = {
    classList: [
        {
            index: 1,
            classId: 'uy98uiuy97897y98787y9',
            classCode: 'QD01',
            className: '测试一班',
            professionName: '测试移动互联网前端',
            schoolName: '青岛实训基地',
            teacherOne: '架构师测试',
            teacherTwo: '项目经理测试',
            classState: 'Y',
            classStuCount: 0
        }
    ]
}

export var getClassById = {
    classQB: [
        {
            classId: 'i7698y9y9u90iu98y99jio',
            className: '测试一班',
            classCode: 'QD01',
            professionName: '测试移动互联网前端',
            schoolName: '青岛实训基地',
            teacherOne: '架构师测试',
            teacherTwo: '项目经理测试',
            classState: 'Y',
            courseList: [
                {
                    courseId: '021098hiuyut789y86r7',
                    courseName: '前端课程',
                    checkFlag: true
                }
            ]

        }
    ]
}

export var updateClass = { //3.17	修改班级
    updateClassFlag: 'success'
}
export var addStuManagement = { //3.18	增加学籍
    addStManagementFlag: 'success'
}
export var getAllStuManagement = { //
    stuManagementList: [
        {
            stuId: 'i7yiou8y897y9p8yp9898y',
            stuCode: 'QD0807856',
            stuTrueName: '测试学员',
            stuSex: 'F',
            className: '测试一班',
            professionName: '移动互联产品研发',
            schoolName: '青岛实训基地',
            stuPhone: '15289498888',
            managementState: 'A'
        }
    ]
}
export var getStuManagementByCondition = { //3.20	按条件查询学籍
    stuManagementList: [
        {
            stuId: '6r6d865e6rd5uw57d6e7t',
            stuCode: 'QD076214',
            stuTrueName: '测试学员',
            stuSex: 'F',
            className: '测试一班',
            professionName: '移动互联产品研发',
            schoolName: '青岛实训基地',
            stuPhone: '15288987083',
            managementState: 'A'
        }
    ]
}
export var updateStuManagement = {
    updateStuManagementFlag: 'success'
}
export var getStuManagementByStuId = {
    stuManagementQB: [
        {
            stuId: '1i4i2u34io2i4iu5u',
            stuCode: 'QD52534343',
            stuTrueName: '学员秦晓健',
            stuSex: '',
            professionName: '',
            schoolName: '',
            stuPhone: '',
            professionCode: '',
            schoolCode: '',
            productCode: '',
            stuIdCard: '',
            stuQualification: '',
            stuSelfSchoolName: '',
            stuSelfProfessionName: '',
            stuMail: '',
            classRefList:[{
                classId:'',
                className:''
            }]
        }
    ]
}