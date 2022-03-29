package com.revature.p2rr.controllers;

import com.revature.p2rr.domain.Waypoint;
import com.revature.p2rr.repositories.WayRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WayPointController {
    private WayRepository wayRepo;

    //constructor
    //dependancy injections
    public WayPointController(WayRepository wayRepo) {
        this.wayRepo = wayRepo;
    }

    @GetMapping("/waypoints")
    public Iterable<Waypoint> getAll() {
        return wayRepo.findAll();
    }

    @PostMapping("/waypoints")
    public Waypoint post(@RequestBody Waypoint waypoint) {
        return wayRepo.save(waypoint);
    }
}

