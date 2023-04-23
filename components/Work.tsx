import Card from "./Card";


const Work = () => {



  return (<div id='work-section' className="px-20 py-16">

    <div className=" relative z-0">
      <p className="font-800 text-9xl opacity-10 tracking-wide">02</p>
      <div className="absolute inset-0 z-10 top-10">
        <p className="text-5xl font-bold tracking-widest font-sora text-lightGray">Selected Works.</p>
      </div>
    </div>

    <div className="flex justify-between flex-wrap">

      <Card description="jsdkh sdfhsdkjf nsdfhljkdh sdfsldhj sdkljshf" site='sd' image='https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239281/ScreenShot_Tool_-20230405063538_asgt9z.png' />

      <Card description="jsdkh sdfhsdkjf nsdfhljkdh sdfsldhj sdkljshf" site='sd' code='kj' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239293/Screenshot_from_2023-04-05_06-31-13_ryotfu.png" />

      <Card description="jsdkh sdfhsdkjf nsdfhljkdh sdfsldhj sdkljshf" site='sd' image='https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239265/ScreenShot_Tool_-20230423093915_ttimlo.png' code='sd' />

      <Card description="jsdkh sdfhsdkjf nsdfhljkdh sdfsldhj sdkljshf" site='sd' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239570/spinc_mtrhmz.png" code='n' />

      <Card description="jsdkh sdfhsdkjf nsdfhljkdh sdfsldhj sdkljshf" site='sd' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239743/movie_yp8fil.png" code="sd" />

      <Card description="jsdkh sdfhsdkjf nsdfhljkdh sdfsldhj sdkljshf" site='sd' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682240599/rest_bhnrvl.png" code='df' />

      <Card description="jsdkh sdfhsdkjf nsdfhljkdh sdfsldhj sdkljshf" site='sd' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239934/rock_rqiftx.png" code='sd' />

      <Card description="jsdkh sdfhsdkjf nsdfhljkdh sdfsldhj sdkljshf" site='sd' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682240918/color_mllalm.png" code='ds' />

    </div>

  </div>);
}

export default Work;