/**
 * 定义共享数据
 * 
 * 
 */
import { defineStore } from "pinia"

// 定义一个共享数据
export const definePerson = defineStore(
    {
        id: "",//当前数据的id不许全局唯一
        state: function () { // 状态其实就是响应式
            return {
                username: "zhangsan",
                age: 0,
                hobbies: ["唱歌", "跳舞"]
            }
        },
        getters: { // 专门定义一个获得数据或者 使用数据专门计算结果的一些函数们这里函数不修改数据
            getAge() {
                return this.age
            },
            getHobbiesCount() {
                return this.hobbies.length
            }
        },
        actions: { // 专门定义修改数据的函数
            doubleAge() {
                this.age = this.age * 2
            }
        }
    }
)