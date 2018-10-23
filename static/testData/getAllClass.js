export var getAllClass = {
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

