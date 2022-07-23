package kr.clean.reacttypescriptblog.vc

import kr.clean.reacttypescriptblog.model.Blog
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ApiService {

    val log: Logger = LoggerFactory.getLogger(this.javaClass)

    @Autowired
    lateinit var apiMapper: ApiMapper

    fun getList(): List<Blog> {
        return apiMapper.selectBlogList()
    }

    fun getBlogOne(no: Int): Blog {
        return apiMapper.selectBlogOne(no)
    }

}