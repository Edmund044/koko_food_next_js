export default function handler(req, res) {
      if (req.method === 'GET') {
     fetch('https://jsonplaceholder.typicode.com/posts', {
                          method: req.method
                        })
      res.status(200).json(comments)
}
          }
