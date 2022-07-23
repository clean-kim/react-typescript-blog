package kr.clean.reacttypescriptblog.vc

import kr.clean.reacttypescriptblog.annotation.LynnDB
import kr.clean.reacttypescriptblog.model.Blog
import org.apache.ibatis.annotations.Mapper

@LynnDB
@Mapper
interface ApiMapper {

    fun selectBlogList(): List<Blog>
    fun selectBlogOne(no: Int): Blog

}