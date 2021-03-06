import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import CodeDetailListPage from '@/pages/codedetail/CodeDetailListPage'
import CodeDetailRegisterPage from '@/pages/codedetail/CodeDetailRegisterPage'
import CodeDetailModifyPage from '@/pages/codedetail/CodeDetailModifyPage'
import CodeDetailReadPage from '@/pages/codedetail/CodeDetailReadPage'

export const CodeDetailRouters = [

    // 목록 화면
    {
        path: '/codedetail',
        name: 'CodeDetailListPage',
        components:{
            header: MainHeader,
            menu: MenuBar,
            default: CodeDetailListPage,
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
        path: '/codedetail/register',
        name: 'CodeDetailRegisterPage',
        components:{
            header: MainHeader,
            menu: MenuBar,
            default: CodeDetailRegisterPage,
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
        path: '/codedetail/:groupCode/:codeValue',
        name: 'CodeDetailReadPage',
        components:{
            header: MainHeader,
            menu: MenuBar,
            default: CodeDetailReadPage,
            footer: Footer
        },
        props: {
            // default: 개별 component에 정의된 props를 사용한다.
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
        path: '/codedetail/:groupCode/:codeValue/modify',
        name: 'CodeDetailModifyPage',
        components:{
            header: MainHeader,
            menu: MenuBar,
            default: CodeDetailModifyPage,
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