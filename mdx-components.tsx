import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Personnalisation des composants HTML pour MDX
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-amber-400 mb-6 border-b border-amber-600/30 pb-2">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-semibold text-amber-300 mb-4 mt-8">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-medium text-amber-200 mb-3 mt-6">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="text-gray-300 mb-4 leading-relaxed">
                {children}
            </p>
        ),
        ul: ({ children }) => (
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="text-gray-300 mb-4 list-decimal list-inside space-y-2">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="text-gray-300">
                {children}
            </li>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-amber-500 pl-4 py-2 mb-4 bg-amber-900/20 text-amber-100 italic">
                {children}
            </blockquote>
        ),
        code: ({ children }) => (
            <code className="bg-gray-800 text-amber-300 px-2 py-1 rounded text-sm font-mono">
                {children}
            </code>
        ),
        pre: ({ children }) => (
            <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                {children}
            </pre>
        ),
        ...components,
    };
}
