import React from "react";

type TabRenderParams = {
  data: Data;
};

type DomainModelOther = {
  id: string;
  type: "other";
};


const modulePlugin = () => {
  return {
    name: "@mybricks/plugin-module",
    title: "模块",
    author: "MyBricks Team",
    "author.zh": "MyBricks团队",
    version: "0.0.1",
    description: "模块",
    // data: {
    //   domainModels: [],
    // },
    contributes: {
      geoView: {
        module: {
          type: "default",
          render() {
          },
        },
      },
      sliderView: {
        tab: {
          title: "领域模型",
          //icon: pluginIcon,
          render(params: TabRenderParams) {
            return <Render data={params.data}/>;
          },
        },
      },
    },
    onLoad(params) {
      params.module.getAll = async () => {
        return [
          {
            id: 'aaa',
            title: '登录模块',
            sectionAry: [
              {
                id: 'login',
                title: '登录',
                editors: [],
                runtime: () => {
                  return (
                    <div>TODO</div>
                  )
                }
              }
            ]
          }
        ]
      }
    },
    // toJSON(params: ToJSONParams) {
    //   domainModelExecutor = new DomainModelExecutor(params.data);
    //   return params.data;
    // },
    // callDomainModel(...args: Parameters<typeof domainModelExecutor.call>) {
    //   return domainModelExecutor.call(...args);
    // },
  };
};

export default modulePlugin
