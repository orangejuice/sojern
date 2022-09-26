import * as fs from "fs";

export default async function handler(req, res) {
  const filename = '/tmp/ok'

  fs.stat(filename, (err, stats) => {
    if (stats)
      res.status(200).send('ok')
    else
      res.status(503).send('Service unavailable.')
  })
}
