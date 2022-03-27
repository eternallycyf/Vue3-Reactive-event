import { reactive, useDom } from './vue3/index.js'

function App() {
  var state = reactive({
    count: 1,
    name: 'zs'
  });

  const add = (num) => {
    state.count += num;
  }

  const minus = (num) => {
    state.count -= num;
  }

  const changeName = (name) => {
    state.name = name;
  }

  return {
    template: `<h1>{{ count }}</h1>
    <h2>{{ name }}</h2>
    <button onClick="add(2)">+</button>
    <button onClick="minus(1)">-</button>
    <button onClick="changeName('sadas')">changeName</button>
    `,
    state,
    methods: {
      add,
      minus,
      changeName
    }
  }
}

useDom(
  App(),
  document.querySelector('#app')
)