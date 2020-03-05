export default function () {
  var trees = new Map()
  trees.set("ideas", [{note:0, children: []}, {note:1, children: [{note:2, children:[]}, {note:3, children:[]}, {note:4, children:[]}]}])
  trees.set("mechanisms", [{note:0, children: [{note:4, children:[{note:5, children:[{note:3, children:[]}]}]}]}, {note:1, children: [{note:2, children:[]}]}])
  return {
    notes: {
      0: {
        id: 0,
        title: 'hello - 0',
        content: '## 0\nhere is my תוכן. i like לכתוב בעברית...',
        tags: ['hey', 'vuln', 'interesting'],
        links: ['note-id://1']
      }, 
      1: {
        id: 1,
        title: 'hello - 1',
        content: '## 1\nhere is my תוכן. i like לכתוב בעברית...',
        tags: ['hey', 'interesting'],
        links: ['note-id://0']
      },
      2: {
        id: 2,
        title: 'hello - 2',
        content: '## 2\nhere is my תוכן. i like לכתוב בעברית...',
        tags: ['hey', 'interesting'],
        links: ['note-id://0']
      },
      3: {
        id: 3,
        title: 'hello - 3',
        content: '## 3\nhere is my תוכן. i like לכתוב בעברית...',
        tags: ['hey', 'interesting'],
        links: ['note-id://0']
      },
      4: {
        id: 4,
        title: 'hello - 4',
        content: '## 4\nhere is my תוכן. i like לכתוב בעברית...',
        tags: ['hey', 'interesting'],
        links: ['note-id://0']
      },
      5: {
        id: 5,
        title: 'hello - 5',
        content: '## 5\nhere is my תוכן. i like לכתוב בעברית...',
        tags: ['hey', 'interesting'],
        links: ['note-id://0']
      },
      6: {
        id: 6,
        title: 'hello - 6',
        content: '## 6\nhere is my תוכן. i like לכתוב בעברית...',
        tags: ['hey', 'interesting'],
        links: ['note-id://0']
      }, 
    },
    trees:trees
  }
}