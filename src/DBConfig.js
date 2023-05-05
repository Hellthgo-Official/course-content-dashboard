export const DBConfig = {
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
      {
        store: 'courseData',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'questions', keypath: 'questions', options: { unique: false } },
          { name: 'answers', keypath: 'answers', options: { unique: false } },
          { name: 'topic', keypath: 'topic', options: { unique: false } },
          { name: 'content', keypath: 'content', options: { unique: false } },
          { name: 'images', keypath: 'images', options: { unique: false } },
        ]
      }
    ]
  };