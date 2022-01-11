import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next'

export function withSSGErrorHandler<P> (fn: GetStaticProps<P>) {
  return async (ctx: GetStaticPropsContext): Promise<GetStaticPropsResult<P>> => {
    try {
      return await fn(ctx)
    } catch (err) {
      console.error(err)
      return {
        notFound: true
      }
    }
  }
}
