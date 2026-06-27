import Giscus from '@giscus/react'

/**
 * Giscus 留言组件配置说明：
 * ============================================================
 * 使用步骤：
 * 1. 确保 GitHub 仓库已开启 Discussions 功能
 *    (Settings → General → Features → Discussions)
 * 2. 访问 https://giscus.app 完成配置：
 *    填入仓库名 → 选择页面与 discussion 映射 → 选择分类
 *    勾选所需功能 → 复制生成的参数填入下方
 * 3. 安装 Giscus GitHub App：
 *    https://github.com/apps/giscus
 *    并授权访问你的仓库
 * ============================================================
 *
 * 必填参数 (须从 giscus.app 获取):
 *   repo:        仓库名，格式 "owner/repo"
 *   repoId:      仓库 ID (giscus.app 自动生成)
 *   category:    Discussion 分类名
 *   categoryId:  分类 ID (giscus.app 自动生成)
 *
 * 可选参数:
 *   mapping:     页面 ↔ discussion 映射方式
 *                'pathname' - 按路径 (推荐)
 *                'url'      - 按完整 URL
 *                'title'    - 按页面标题
 *   theme:       主题，当前使用 'light'
 *   lang:        语言，当前使用 'zh-CN'
 *   reactionsEnabled: '1' 启用反应 / '0' 禁用
 *   inputPosition: 'bottom' 或 'top'
 *   loading:     'lazy' 懒加载 / 'eager' 立即加载
 */

export default function GiscusComment() {
  return (
    <Giscus
      id="giscus-comments"
      repo="Wardellyida/MinQingHuanHuan"          // ← 改为你的仓库名
      repoId="R_kgDOLAM-aA"                                 // ← 填入 giscus.app 生成的 repoId
      category="Announcements"                                // ← 改为你的 Discussion 分类名
      categoryId="DIC_kwDOLAM-aM4C__LI"                         // ← 填入 giscus.app 生成的 categoryId
      mapping="pathname"
      term="留言墙"
      theme="light"
      lang="zh-CN"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      loading="lazy"
    />
  )
}
