<template>
    <div align="center">
        <h2>게시판 상세보기</h2>
        <board-read v-if="board" :board="board"/>
        <p v-else>loading...</p>
        <router-link :to="{ name : 'BoardModifyPage', params : { boardNo } }">편집</router-link>
        <button @click="onDelete" >삭제</button>
        <router-link :to="{ name : 'BoardListPage' }">목록</router-link>
    </div>
</template>

<script>
    // 지역 컴포넌트 임포트
    import BoardRead from '@/components/BoardRead'
    import { mapState, mapActions } from 'vuex'
    import api from '@/api'
    export default {
        // 컴포넌트 이름
        name : 'BoardReadPage',
        // 지역 컴포넌트 등록
        components : { BoardRead },
        // props 속성에 넘겨받는 값 boardNo 정의
        props : {
            boardNo : {
                type : String,
                required : true
            }
        },
        // 스토어 상태를 computed 속성으로 등록
        computed : {
            ...mapState(['board'])
        },
        // 매핑된 함수 fetchBoardList() 실행
        created() {
            this.fetchBoard(this.boardNo)
            .catch( err => {
                console.log(err.response.data.message)
                alert('오류로 게시글을 불러 올 수 없었습니다.')
                this.$router.back()
            })
        },
        // 스토어 액션을 methods 속성으로 등록
        methods : {
            ...mapActions(['fetchBoard']),
            onDelete(){
                const { boardNo } = this.board
                api.delete(`/boards/${boardNo}`)
                .then( res => {
                    alert('게시글이 삭제되었습니다.')
                    this.$router.push({ name : 'BoardListPage' })
                })
                .catch( err => {
                    console.log(err.response.data.message)
                    alert('오류로 인하여 삭제에 실패하였습니다.')
                })
            }
        }
    }
</script>