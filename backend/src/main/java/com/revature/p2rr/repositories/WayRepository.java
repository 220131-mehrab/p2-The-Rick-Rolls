package com.revature.p2rr.repositories;

import com.revature.p2rr.domain.User;
import com.revature.p2rr.domain.Waypoint;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WayRepository extends CrudRepository<Waypoint, Integer> {

}
