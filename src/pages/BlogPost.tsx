import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeftIcon, 
  CalendarIcon, 
  ClockIcon, 
  UserIcon,
  TagIcon 
} from '@heroicons/react/24/outline'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  author: string
  category: string
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'React 18 新特性详解',
      excerpt: '深入了解React 18带来的并发渲染、自动批处理、Suspense改进等新特性',
      content: `
# React 18 新特性详解

React 18 是React的最新主要版本，引入了许多激动人心的新特性和改进。本文将详细介绍这些新特性以及如何在项目中正确使用它们。

## 1. 并发渲染（Concurrent Rendering）

并发渲染是React 18最重要的新特性之一。它允许React同时准备多个版本的UI，使得应用能够更加流畅地响应用户交互。

### 自动批处理（Automatic Batching）

在React 18之前，只有在React事件处理函数中的状态更新才会被批处理。现在，所有的状态更新都会被自动批处理：

\`\`\`javascript
// React 18之前：这些更新不会被批处理
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 触发两次重新渲染
}, 0);

// React 18：这些更新会被批处理
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 只触发一次重新渲染
}, 0);
\`\`\`

### Suspense 改进

React 18对Suspense进行了重大改进，现在可以在服务器端渲染中使用：

\`\`\`javascript
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## 2. 新的 Hooks

### useId Hook

用于生成唯一的ID，特别适用于需要生成唯一标识符的场景：

\`\`\`javascript
function NameFields() {
  const id = useId();
  return (
    <>
      <label htmlFor={id + '-firstName'}>First Name</label>
      <input id={id + '-firstName'} type="text" />
      <label htmlFor={id + '-lastName'}>Last Name</label>
      <input id={id + '-lastName'} type="text" />
    </>
  );
}
\`\`\`

### useDeferredValue Hook

用于延迟更新非关键部分UI：

\`\`\`javascript
function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <SearchInput query={query} />
      <Suspense fallback={<Loading />}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  );
}
\`\`\`

### useTransition Hook

用于标记某些状态更新为过渡状态：

\`\`\`javascript
const [isPending, startTransition] = useTransition();

function handleChange(e) {
  startTransition(() => {
    setInputValue(e.target.value);
  });
}

return (
  <div>
    <input onChange={handleChange} />
    {isPending && <Spinner />}
    <SearchResults query={inputValue} />
  </div>
);
\`\`\`

## 3. 严格模式改进

React 18的严格模式现在会故意重复挂载组件来帮助检测副作用：

\`\`\`javascript
// React 18严格模式下，组件会被挂载、卸载、再重新挂载
function MyComponent() {
  React.useEffect(() => {
    console.log('组件挂载');
    return () => {
      console.log('组件卸载');
    };
  }, []);
  
  return <div>我的组件</div>;
}
\`\`\`

## 4. 新的客户端 API

React 18引入了新的客户端渲染API：

\`\`\`javascript
// 旧的API
ReactDOM.render(<App />, document.getElementById('root'));

// 新的API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`

## 5. 流式SSR

React 18支持流式服务器端渲染，可以逐步发送HTML片段：

\`\`\`javascript
// 服务器端
import { renderToPipeableStream } from 'react-dom/server';

app.get('/', (req, res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['/static/js/bundle.js'],
    onShellReady() {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      pipe(res);
    },
  });
});
\`\`\`

## 6. 最佳实践建议

1. **升级到React 18**：确保你的项目兼容性，特别是第三方库
2. **使用createRoot**：更新你的渲染代码以使用新的API
3. **利用并发特性**：合理使用useTransition和useDeferredValue优化用户体验
4. **测试严格模式**：确保你的组件在严格模式下正常工作
5. **渐进式升级**：不必一次性使用所有新特性，可以逐步采用

## 总结

React 18带来了许多强大的新特性，特别是并发渲染功能，这将显著改善React应用的性能和用户体验。通过理解和使用这些新特性，我们可以构建更加流畅、响应更快的Web应用。

升级到React 18是一个值得的投资，它为React的未来发展奠定了基础。
      `,
      date: '2024-01-15',
      readTime: '5分钟',
      tags: ['React', 'JavaScript', '前端框架'],
      author: '技术小白',
      category: '前端开发'
    },
    {
      id: 2,
      title: 'TypeScript 最佳实践',
      excerpt: '分享在大型项目中使用TypeScript的经验和最佳实践',
      content: `
# TypeScript 最佳实践

TypeScript已经成为现代前端开发的标准配置，在大型项目中合理使用TypeScript可以显著提高代码质量和开发效率。

## 1. 类型定义

### 使用interface而不是type

\`\`\`typescript
// 推荐
interface User {
  id: number;
  name: string;
  email: string;
}

// 不推荐
type User = {
  id: number;
  name: string;
  email: string;
};
\`\`\`

### 避免使用any类型

\`\`\`typescript
// 不推荐
function processData(data: any) {
  return data.name;
}

// 推荐
function processData(data: { name: string }) {
  return data.name;
}

// 或者使用泛型
function processData<T extends { name: string }>(data: T) {
  return data.name;
}
\`\`\`

## 2. 工具类型

善用TypeScript内置的工具类型：

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - 所有属性可选
type PartialUser = Partial<User>;

// Pick - 选择特定属性
type UserBasicInfo = Pick<User, 'id' | 'name'>;

// Omit - 排除特定属性
type UserWithoutId = Omit<User, 'id'>;

// Record - 创建对象类型
type UserRecord = Record<string, User>;
\`\`\`

## 3. 配置文件

合理的tsconfig.json配置：

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
\`\`\`

## 4. 函数类型

明确的函数类型定义：

\`\`\`typescript
// 推荐
type EventHandler<T> = (event: T) => void;

const handleClick: EventHandler<MouseEvent> = (event) => {
  console.log(event.target);
};

// 使用泛型
function createLogger<T>(prefix: string): (message: T) => void {
  return (message) => {
    console.log(\`\${prefix}: \${message}\`);
  };
}
\`\`\`

## 总结

合理使用TypeScript可以显著提高代码质量和开发效率。通过遵循这些最佳实践，我们可以构建更加健壮和可维护的TypeScript应用。
      `,
      date: '2024-01-12',
      readTime: '8分钟',
      tags: ['TypeScript', 'JavaScript', '类型系统'],
      author: '技术小白',
      category: '编程语言'
    }
  ]

  const post = blogPosts.find(p => p.id === parseInt(id || '1'))

  if (!post) {
    return (
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">文章未找到</h1>
          <p className="text-gray-300 mb-8">抱歉，您查找的文章不存在。</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 glass-card text-white rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            返回博客列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center glass-card px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            返回博客列表
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-8"
        >
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {post.title}
            </h1>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center">
                <UserIcon className="w-4 h-4 mr-1" />
                {post.author}
              </span>
              <span className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 glass-card text-gray-300 text-sm rounded-full"
                >
                  <TagIcon className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>
          
          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mb-4 mt-6">$1</h1>')
                  .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-white mb-3 mt-5">$1</h2>')
                  .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-white mb-2 mt-4">$1</h3>')
                  .replace(/\*\*(.*)\*\*/gim, '<strong class="text-white font-semibold">$1</strong>')
                  .replace(/\*(.*)\*/gim, '<em class="text-gray-200">$1</em>')
                  .replace(/^\`(.*?)\`$/gim, '<code class="bg-gray-800 px-2 py-1 rounded text-blue-400">$1</code>')
                  .replace(/```(.*?)```/gs, '<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"><code class="text-green-400">$1</code></pre>')
                  .replace(/`(.*?)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-blue-400">$1</code>')
                  .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
                  .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-4">$1</ul>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(.*)$/, '<p class="mb-4">$1</p>')
              }}
            />
          </div>
        </motion.article>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">相关文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="glass-card p-6 hover:bg-white/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2 text-white hover:text-blue-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{relatedPost.date}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogPost