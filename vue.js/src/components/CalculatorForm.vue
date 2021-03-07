<template>
    <div class="calculator">
        <div class="display">{{ res || '0'}}</div>
        <div @click="clear" class="btn">C</div>
        <div @click="sign" class="btn">+/-</div>
        <div @click="percent" class="btn">%</div>
        <div @click="divide" class="btn operator">/</div>
        <div @click="append(7)" class="btn">7</div>
        <div @click="append(8)" class="btn">8</div>
        <div @click="append(9)" class="btn">9</div>
        <div @click="multiple" class="btn operator">x</div>
        <div @click="append(4)" class="btn">4</div>
        <div @click="append(5)" class="btn">5</div>
        <div @click="append(6)" class="btn">6</div>
        <div @click="minus" class="btn operator">-</div>
        <div @click="append(1)" class="btn">1</div>
        <div @click="append(2)" class="btn">2</div>
        <div @click="append(3)" class="btn">3</div>
        <div @click="plus" class="btn operator">+</div>
        <div @click="append(0)" class="zero btn">0</div>
        <div @click="dot" class="btn">.</div>
        <div @click="equal" class="btn operator">=</div>

    </div>
</template>

<script>
    export default {
        name: 'CalculatorForm',
        data(){
            return {
                res: '',
                operator: null,
                prev: null,
                operatorClicked: false
            }
        },
        methods: {
            clear(){
                this.res = '';
            },
            sign(){
                // 첫 문자열에 -가 있다면 잘라내고 나타내고
                // 없다면 -붙여서 나타내기
                this.res = this.res.charAt(0) === '-'
                ? this.res.slice(1)
                : `-${this.res}`;
            },
            percent(){
                this.res = this.res * 0.01;
                // this.res = `${parseFloat(this.res) / 100}`이 더 좋음
            },
            append(num){
                if(this.operatorClicked){
                    this.res = '';
                    this.operatorClicked = false;
                }
                this.res = this.res + num;
            },
            dot(){
                // indexOf 특정문자 위치 찾기
                // append 요소의 끝에 추가
                // .이 표시 되어 있지 않다면
                if(this.res.indexOf('.') === -1){
                    this.append('.');
                }
            },
            // 반복되는 코드 메소드로 분리
            setPrev(){
                this.prev = this.res;
                this.operatorClicked = true;
            },
            divide(){
                this.operator = ( a, b ) => b / a;
                this.setPrev();
            },
            multiple(){
                this.operator = ( a, b ) => a * b;
                this.setPrev();
            },
            minus(){
                this.operator = ( a, b ) => a - b;
                this.setPrev();
            },
            plus(){
                this.operator = ( a, b ) => a + b;
                this.setPrev();
            },
            // String이라 계산되지 않기 때문에 parseFloat으로 형변환해줌
            equal(){
                this.res = `${this.operator(
                    parseFloat(this.res), parseFloat(this.prev)
                )}`;
                this.prev = null;
            }
        }
    }
</script>

<style>
.calculator{
    width: 400px;
    margin: 0 auto;
    font-size: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    text-align: center;
}

.display{
    grid-column: 1 / 5;
    background-color: #333;
    color: #fff;
    text-align: right;
    padding-right: 5px;
}

.btn{
    background-color: #eee;
    border: 1px solid #999;
}

.zero{
    grid-column: 1 / 3;
}

.operator{
    background-color: #ffa500;
    color: #fff;
}
</style>