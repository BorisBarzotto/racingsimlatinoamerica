import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message : string,
    revalidated : boolean
}

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {

        // Check for secret to confirm this is a valid request
        if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
          return res.status(401).json({
              message: 'Invalid token',
              revalidated: false
          })
        }
      
        try {
          // this should be the actual path not a rewritten path
          // e.g. for "/blog/[slug]" this should be "/blog/post-1"
                        
            await res.revalidate('/')
          return res.json({
              revalidated: true,
              message: 'Revalidated Done'
          })
        } catch (err) {
          // If there was an error, Next.js will continue
          // to show the last successfully generated page
          return res.status(500).send({
              message: 'Error revalidating',
              revalidated: false
          })
        }
      
}

