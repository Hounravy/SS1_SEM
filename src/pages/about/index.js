import Link from 'next/link';
import Image from 'next/image';
const About = () => {
  return (
    <>
      <section className=' bg-slate-50'>
        <div className='container-full pb-11'>
          <div className='flex justify-center items-center mb-9'>
            <h5 className=' text-2xl font-bold'>集团概述</h5>
          </div>
          <div>
            <p>
              铂金瀚金融集团自成立以来，已拓展逾90家分公司，遍布菲律宾、柬埔寨、泰国、迪拜、新加坡、缅甸、老挝、马来西亚、台湾和越南等地。集团员工超过500名，由具有丰富经验的专业金融团队组成，涵盖金融、博彩、娱乐、支付等多个领域。经过三年的深耕发展，各业务领域均取得显著成果，赢得业界口碑。
            </p>
            <br/>
            <p>集团旗下拥有强大的线上线下业务体系，包括各类型实体经营、支付行业、交易所、线上娱乐以及赌场娱乐城等，覆盖整个东南亚市场。得益于雄厚的资金实力和专业团队支持，我们为客户提供全方位的安心服务
</p>
<br/>
            <p>展望未来，铂金瀚集团将站在时代前沿，积极推进国际化战略，与全球市场紧密接轨，不断追求卓越，为客户创造更高价值。</p>
          </div>

          <div className='flex justify-center mt-11'>
            <Link href={'/'}>
              <button className=' hover:bg-amber-500 hover:text-white text-amber-600 outline-none border-2 border-amber-600 py-[5px] px-[20px] rounded-full'>马上转帐</button>
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-roop'>
        <div className='container-full'>
          <div className=' text-white p-16'>
            <div className=' items-center text-center'>
              <h5 className=' text-2xl font-bold'>企业理念</h5>
              <p className=' text-xl mt-4 mb-8'>你我携手合作，共赢盛世未来 🤝</p>
            </div>
            <div className='flex'>
              <div className='ml-0 mr-10 w-1/2' >
              <Image
                    src='/assets/pic/g-up1.jpg'
                    width={600}
                    height={500}
                    className=' w-full h-full'
                  />
              </div>
              <div className='flex flex-col w-1/2'>
                <div className=' my-2'>
                  <h5 className=' text-xl text-amber-600 font-bold'>专业团队与领域专精</h5>
                </div>
                <div> 铂金瀚集团支付团队以专业的金融人才为核心，集团庞大的管理团队实力不断的创新，研发新项目，培养出多批优秀的专业人员，为你提供最安心的一站式服务</div>
                <div className='my-2'> <button className=' bg-white hover:bg-amber-500 hover:text-white text-amber-600 outline-none border-2  py-[5px] px-[20px] rounded-full'>联络客服</button></div>
              </div>

            </div>
            
            <div className='flex flex-row-reverse'>
              <div className='mr-0 ml-10 w-1/2'>
              <Image
                    src='/assets/pic/g-up2.jpg'
                    width={600}
                    height={500}
                    className=' w-full h-full'
                  />
              </div>
              <div className='flex flex-col w-1/2'>
                <div className=' my-2 flex justify-end'>
                  <h5 className=' text-xl text-amber-600 font-bold'>合作优势</h5>
                </div>
                <div> 本集团在行业内拥有独特竞争优势，我们为客户提供一站式、全方位的服务。凭借完善的公司架构、高度可复制的产业模式、具有发展潜力的产业框架以及优秀的客户管理系统，我们致力于满足客户的各种需求，为他们带来卓越的体验。盛世未来，共创明天，我们致力于为各灰产供全方位支持与保障。让我们携手共进，挑战可能！</div>
                <div className='my-2 flex justify-end'> <button className=' bg-white hover:bg-amber-500 hover:text-white text-amber-600 outline-none border-2  py-[5px] px-[20px] rounded-full'>联络客服</button></div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
