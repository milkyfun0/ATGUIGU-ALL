function getTableProps(value = '') {
    return [
        "code" + value,
        "name" + value,
        "install_time" + value,
        "life_time" + value,
        "zip" + value,
        "describe" + value,
        "count" + value,
        "author" + value
    ]
}

function getATestId(num) {
    let numbers = Array(num);
    for (let i = 0; i < num; i++) {
        numbers[i] = i + 1;
    }
    return numbers
}

function getATestFixed(len) {
    let flag = Array(len);
    len[0] = true
    for (let i = 1; i < len; i++) {
        flag[i] = false;
    }
    return flag
}

function getTableData() {
    return {
        data_info: [
            {
                column_id: 0,
                column_prop: "code",
                column_value: "code",
                column_filter_type: "text",
                fixed: true,
                select_items: []
            },
            {
                column_id: 1,
                column_prop: "name",
                column_value: "name",
                column_filter_type: "text",
                fixed: false,
                select_items: []
            },
            {
                column_id: 2,
                column_prop: "install_time",
                column_value: "install_time",
                column_filter_type: "date",
                fixed: false,
                select_items: []
            },
            {
                column_id: 3,
                column_prop: "life_time",
                column_value: "life_time",
                column_filter_type: "scope",
                fixed: false,
                select_items: []
            },
            {
                column_id: 4,
                column_prop: "zip",
                column_value: "zip",
                column_filter_type: "select",
                fixed: false,
                select_items: ['CA 90036', 'CA 94102', 'IL 60601', 'WA 98101', 'FL 33101', 'OR 97201']
            },
            {
                column_id: 5,
                column_prop: "describe",
                column_value: "describe",
                column_filter_type: "text",
                fixed: false,
                select_items: []
            },
            {
                column_id: 6,
                column_prop: "count",
                column_value: "count",
                column_filter_type: "scope",
                fixed: false,
                select_items: []
            },
            {
                column_id: 7,
                column_prop: "author",
                column_value: "author",
                column_filter_type: "text",
                fixed: false,
                select_items: []
            }
        ],
        page: {
            page_id: 1,
            page_size: 15,
            page_total: 150
        },
        data: [
            {
                code: 'SB1001',
                name: 'software-01',
                install_time: '2016-05-02',
                city: 'Los Angeles',
                life_time: 10,
                zip: 'CA 90036',
                describe: "this is a system",
                count: 10,
                author: "Tom"
            },
            {
                code: 'SB1002',
                name:
                    'software-02',
                install_time:
                    '2017-08-15',
                city:
                    'New York',
                life_time:
                    8,
                zip:
                    'NY 10001',
                describe:
                    "a powerful tool",
                count:
                    15,
                author:
                    "Alice"
            }
            ,
            {
                code: 'SB1003',
                name:
                    'software-03',
                install_time:
                    '2019-11-20',
                city:
                    'San Francisco',
                life_time:
                    12,
                zip:
                    'CA 94102',
                describe:
                    "optimized for efficiency",
                count:
                    20,
                author:
                    "John"
            }
            ,
            {
                code: 'SB1004',
                name:
                    'software-04',
                install_time:
                    '2018-03-10',
                city:
                    'Chicago',
                life_time:
                    9,
                zip:
                    'IL 60601',
                describe:
                    "enhanced security features",
                count:
                    12,
                author:
                    "Emily"
            }
            ,
            {
                code: 'SB1005',
                name:
                    'software-05',
                install_time:
                    '2020-09-05',
                city:
                    'Seattle',
                life_time:
                    11,
                zip:
                    'WA 98101',
                describe:
                    "user-friendly interface",
                count:
                    18,
                author:
                    "David"
            }
            ,
            {
                code: 'SB1006',
                name:
                    'software-06',
                install_time:
                    '2017-06-12',
                city:
                    'Boston',
                life_time:
                    7,
                zip:
                    'MA 02108',
                describe:
                    "streamlined workflow",
                count:
                    14,
                author:
                    "Sarah"
            }
            ,
            {
                code: 'SB1007',
                name:
                    'software-07',
                install_time:
                    '2018-10-25',
                city:
                    'Austin',
                life_time:
                    6,
                zip:
                    'TX 78701',
                describe:
                    "cloud-based solution",
                count:
                    22,
                author:
                    "Michael"
            }
            ,
            {
                code: 'SB1008',
                name:
                    'software-08',
                install_time:
                    '2019-04-30',
                city:
                    'Denver',
                life_time:
                    8,
                zip:
                    'CO 80202',
                describe:
                    "intuitive design",
                count:
                    16,
                author:
                    "Rachel"
            }
            ,
            {
                code: 'SB1009',
                name:
                    'software-09',
                install_time:
                    '2021-01-15',
                city:
                    'Miami',
                life_time:
                    5,
                zip:
                    'FL 33101',
                describe:
                    "scalable architecture",
                count:
                    25,
                author:
                    "Daniel"
            }
            ,
            {
                code: 'SB1010',
                name:
                    'software-10',
                install_time:
                    '2020-07-20',
                city:
                    'Houston',
                life_time:
                    9,
                zip:
                    'TX 77002',
                describe:
                    "multi-platform compatibility",
                count:
                    19,
                author:
                    "Jessica"
            }
            ,
            {
                code: 'SB1011',
                name:
                    'software-11',
                install_time:
                    '2017-11-08',
                city:
                    'Portland',
                life_time:
                    6,
                zip:
                    'OR 97201',
                describe:
                    "advanced analytics tools",
                count:
                    13,
                author:
                    "Ryan"
            }
            ,
            {
                code: 'SB1012',
                name:
                    'software-12',
                install_time:
                    '2018-02-18',
                city:
                    'Philadelphia',
                life_time:
                    7,
                zip:
                    'PA 19103',
                describe:
                    "real-time collaboration features",
                count:
                    17,
                author:
                    "Olivia"
            }
            ,
            {
                code: 'SB1013',
                name:
                    'software-13',
                install_time:
                    '2019-09-10',
                city:
                    'Dallas',
                life_time:
                    8,
                zip:
                    'TX 75201',
                describe:
                    "automated workflows",
                count:
                    21,
                author:
                    "William"
            }
            ,
            {
                code: 'SB1014',
                name:
                    'software-14',
                install_time:
                    '2021-05-28',
                city:
                    'Phoenix',
                life_time:
                    6,
                zip:
                    'AZ 85001',
                describe:
                    "mobile-friendly interface",
                count:
                    23,
                author:
                    "Emma"
            }
            ,
            {
                code: 'SB1015',
                name:
                    'software-15',
                install_time:
                    '2020-03-15',
                city:
                    'Atlanta',
                life_time:
                    7,
                zip:
                    'GA 30301',
                describe:
                    "enhanced reporting capabilities",
                count:
                    18,
                author:
                    "James"
            }
        ],
    }
}

function getTableData2() {
    return getTableData().data
}

export {getTableData, getTableData2, getTableProps}


// function sortOnChange({column, prop, order}) {
//     console.log(`等待后端响应 column.label:${column.label} prop:${prop} order:${order}`);
//     return tableData
// }
