import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import CodeClassListPage from '@/views/codeclass/CodeClassListPage'
import CodeClassRegisterPage from '@/views/codeclass/CodeClassRegisterPage'
import CodeClassModifyPage from '@/views/codeclass/CodeClassModifyPage'
import CodeClassReadPage from '@/pages/codeclass/CodeClassReadPage'

export const CodeClassRouters = [

    // 목록 화면
    {
        path: '/codeclass',
        name: 'CodeClassListPage',
        components:{
            header: MainHeader,
            menu: MenuBar,
            default: CodeClassListPage,
            footer: Footer
        },
        beforeEnter( to, from, next ){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }
    },
    // 등록 화면
    {
        path: '/codeclass/register',
        name: 'CodeClassRegisterPage',
        components:{
            header: MainHeader,
            menu: menubar,
            default: CodeClassRegisterPage,
            footer: Footer
        },
        beforeEnter( to, from, next ){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }
    },
    // 상세 보기 화면
    {
        path: '/codeclass/:groupCode',
        name: 'CodeClassReadPage',
        components:{
            header: MainHeader,
            menu: menubar,
            default: CodeClassReadPage,
            footer: Footer
        },
        props: {
            default: true
        },
        beforeEnter( to, from, next ){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }       
    },
    // 수정 화면
    {
        path: '/codeclass/:groupCode/modify',
        name: 'CodeClassModifyPage',
        components:{
            header: MainHeader,
            menu: menubar,
            default: CodeClassModifyPage,
            footer: Footer
        },
        props: {
            default: true
        },
        beforeEnter( to, from, next ){
            const { isAdmin } = store.getters
            if (!isAdmin){
                alert('관리자 권한이 필요합니다!')
                next({ name: 'Signin'})
            }
            next()
        }  
    }
]