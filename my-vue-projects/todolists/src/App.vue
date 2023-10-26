<script>
export default {

  // 1.TODO列表进行渲染：先定义需要的 data，再在模板中进行渲染（数据绑定）
  data () {
    return {
      todos: [
        {
          id: 123456,
          title: '测试内容111',
          completed: false
        },
        {
          id: 456789,
          title: '测试内容222',
          completed: true
        }
      ], 
      visibility: 'all'
    }
  },

  // 2.处理切换功能——勾选 状态切换、全选 状态切换，全部勾选 功能
  methods: {
    toggleAll (e) {
      // 全部勾选
      this.todos.forEach(todo => todo.completed = e.target.checked)
    },
    onHashChange () {
      // 在 template 中的 url 前面有 ‘#’，所以需要替换掉
      const hash = window.location.hash.replace(/#\/?/, '')
      // 根据 hash 值的不同，筛选出不同的 todolists
      if (['all', 'active', 'completed'].includes(hash)) {
        this.visibility = hash
      } else {
        window.location.hash = ''
        this.visibility = 'all'
      }
    },
    addTodo (e) {
      // 获取输入框的值，判断是否为空
      const title = e.target.title.trim()
      if (!title) {
        return
      }
      // 添加到 todos 中，最后清空输入框
      this.todos.push({
        id: Date.now(),
        title,
        completed: false
      })
      e.target.value = ''
    },
    removeTodo (todo) {
      // 删除 todo，因为没有做本地存储，所以直接从数组中删除即可
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    clearCompleted () {
      // 清除已完成的 todo
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  // 为了避免重复计算，使用 计算属性 包装一下
  computed: {
    filteredTodos () {
      switch (this.visibility) {
        case 'all':
          return this.todos
        case 'active':
          return this.todos.filter(todo => !todo.completed)
        case 'completed':
          return this.todos.filter(todo => todo.completed)
      }
    },
    // 未完成的 todo 数量
    remaining () {
      return this.todos.filter(todo => !todo.completed).length
    },
    showFooter () {
      // 有 todo 时才显示 footer
      return this.todos.length > 0
    },
    itemWord () {
      // 细节：当 todo 数量大于 1 时，显示 items，否则显示 item。除了计算属性实现外，还有其他实现方式，比如使用过滤器
      return this.remaining > 1 ? 'items' : 'item'
    }
  },
  mounted () {
    // 根据完成状态筛选 todolists 的事件监听器——hashchange
    // 根据标准的 HTML5 规范，JavaScript 的window对象具有hashchange事件，当 URL 的哈希值发生变化时就会触发该事件。
    // 注意！！！！ hashchange 必须是全小写！！ (这是一个标准规范的事件，不要搞出 驼峰名字 来了)
    window.addEventListener('hashchange', this.onHashChange)
    // 主动调用一次，避免刷新时重置状态了
    this.onHashChange()
  }

  // 3.筛选、新增、删除
}
</script>

<template>
  <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<input @keyup.enter="addTodo" class="new-todo" placeholder="What needs to be done?" autofocus>
			</header>
			<!-- This section should be hidden by default and shown when there are todos -->
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" @click="toggleAll">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
					<li 
            v-for="todo in filteredTodos"
            :key="todo.id"
            :class="{ completed: todo.completed }"
          >
						<div class="view">
							<input class="toggle" type="checkbox" v-model="todo.completed">
							<label v-text="todo.title"></label>
							<button class="destroy" @click="removeTodo(todo)"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
				</ul>
			</section>
			<!-- This footer should be hidden by default and shown when there are todos -->
			<footer class="footer" v-if="showFooter">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count">
          <strong>{{ remaining }}</strong> 
           {{ itemWord }} left
        </span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<a :class="{ selected: visibility === 'all'}" href="#/all">All</a>
					</li>
					<li>
						<a :class="{ selected: visibility === 'active'}" href="#/active">Active</a>
					</li>
					<li>
						<a :class="{ selected: visibility === 'completed'}" href="#/completed">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed" @click="clearCompleted">Clear completed</button>
			</footer>
		</section>
</template>

<style>
@import "https://unpkg.com/todomvc-app-css@2.4.1//index.css";
</style>
