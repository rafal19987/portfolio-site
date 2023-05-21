import { motion as m, useInView } from 'framer-motion';
import LinkList from './LinkList';
import StackList from './StackList';

const Article = () => {
  return (
    <m.article
      className="flex flex-col items-center justify-center w-full min-h-[400px] h-full mt-14   rounded-lg bg-[var(--secondary-bg-color)] xl:w-3/5 "
      initial={{ y: '30px', opacity: 0 }}
      animate={{ y: '0px', opacity: 1 }}
      transition={{ delay: 0.4, opacity: { duration: 0.5 } }}
    >
      <m.h3
        className="p-4 text-base text-[var(--secondary-text-color)] xl:text-xl"
        initial={{ x: '30px', opacity: 0 }}
        animate={{ x: '0px', opacity: 1 }}
        transition={{ delay: 0.6, opacity: { duration: 0.5 } }}
      >
        JavaScript Interview questions App
      </m.h3>
      <div className="flex flex-col justify-between w-full min-h-80 max-h-full">
        <m.div
          className="px-5 py-2"
          initial={{ y: '30px', opacity: 0 }}
          animate={{ y: '0px', opacity: 1 }}
          transition={{ delay: 0.8, opacity: { duration: 0.5 } }}
        >
          <h4 className="text-sm text-justify  xl:text-xl">
            A web app for everybody who wants to prepare for recruitment
            interviews, especially in the JavaScript topic. You can add your own
            pool of questions or use the existing one. The questions are stored
            in a MongoDB database. Current questions with answers are saved in
            local storage, so if you don`t have enough time to complete a study
            session, you can come back to it later. You can also check the
            original visual concept that I created in the Figma Prototype.
          </h4>
        </m.div>

        <div className="flex items-center justify-center w-full h-full">
          <StackList />
        </div>
      </div>

      <div className="w-full px-4 py-4 border-t border-gray-500">
        <LinkList />
      </div>
    </m.article>
  );
};

export default Article;