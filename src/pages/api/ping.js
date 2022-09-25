import * as fs from "fs";

export default function handler(req, res) {
  const filename = '/tmp/ok'

  if (fs.statSync(filename))
    res.status(200).send('ok')
  else
    res.status(503).send('Service unavailable.')
}
