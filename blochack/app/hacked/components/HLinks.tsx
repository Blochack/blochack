import { useState } from 'react';
import Tree from 'react-d3-tree';
import { TrxnHistory } from './TrxnHistory';
import { TrxnDetails } from './TrxnDetails';

export const HLinks = () => {
  const [showHistory, setShowHistory] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const handleModals = () => {
    setShowHistory(false)
    setShowDetails(true)
  }
  const closeModal = () => {
    setShowDetails(false)
    setShowHistory(false)
  }
  const orgChart = {
    name: '0x9b99',
    children: [
      {
        name: '0x9b99',
        children: [
          {
            name: '0x9b99',
            // children: [
            //   {
            //     name: '0x9b99'
            //   }
            // ]
          },
          {
            name: '0x9b99',
            children: [
              {
                name: '0x9b99'
              }
            ]
          },
          // {
          //   name: '0x9b99',
          //   children: [
          //     {
          //       name: '0x9b99'
          //     }
          //   ]
          // },
          {
            name: '0x9b99',
            children: [
              {
                name: '0x9b99'
              }
            ]
          },
        ]
      },
      {
        name: '0x9b99',
        children: [
          {
            name: '0x9b99',
            children: [
              {
                name: '0x9b99'
              }
            ]
          },
          {
            name: '0x9b99',
            children: [
              {
                name: '0x9b99'
              }
            ]
          },
          {
            name: '0x9b99',
          },
        ]
      },
      {
        name: '0x9b99',
      },
      {
        name: '0x9b99',
        children: [
          {
            name: '0x9b99',
            children: [
              {
                name: '0x9b99'
              }
            ]
          },
          {
            name: '0x9b99',
            children: [
              {
                name: '0x9b99'
              }
            ]
          },
          {
            name: '0x9b99'
          },
        ]
      },
      {
        name: '0x9b99',
        children: [
          {
            name: '0x9b99',
            // children: [
            //   {
            //     name: '0x9b99'
            //   }
            // ]
          },
          {
            name: '0x9b99',
            // children: [
            //   {
            //     name: '0x9b99'
            //   }
            // ]
          },
        ]
      },
    ]
  }
  return (
    <>
    <div id='treeWrapper' className="p-20 w-full h-full min-h-[100vh] min-w-[100vh]">
        <Tree
        data={orgChart}
        orientation='vertical'
        svgClassName="tree-svg"
        rootNodeClassName="root-ctn"
        branchNodeClassName="branch-class"
        pathClassFunc="path-class"
        collapsible={false}
        draggable={true}
        depthFactor={0}
        dimensions={{height: 20, width: 10}}
        leafNodeClassName="leaf-class"
        nodeSize={{x: 70, y: 150}}
        onNodeMouseOver={() => setShowHistory(true)}
        // onNodeMouseOut={() => setShowHistory(false)}
        onNodeClick={() => handleModals()} />
    </div>
    {showHistory && <TrxnHistory closeModal={closeModal}/>}
    {showDetails && <TrxnDetails closeModal={closeModal} />}
    </>
  )
}
