"""
每日低保
先注册好APP和绑定
变量名：Look_at_Yuhang
Cron:自己定,一天一次或两次,看任务量
自行抓包app的token,或使用接码登录获取工具：哪个能下就用那个
https://www.123pan.com/s/wmSqVv-Zvfxh.html
https://pan.xunlei.com/s/VNpOQ2c7pPpvoFw80LP9p4EXA1?pwd=vn4v
多账号换行或&
阅读点赞分享抽奖
自行决定做不做评论任务, 通过设置comment的值
设置comment = 0 , 则不做评论
------------------------------------------
"""
import lzma, base64
comment = 0  #等于1，即做评论任务
exec(lzma.decompress(base64.b64decode('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')))

